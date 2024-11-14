// import axios from 'axios';

// const getBaseURL = () => {
//     const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
//     return isLocalhost ? 'http://localhost:3000' : 'https://44c1-102-215-33-94.ngrok-free.app';
//   };

//   const getToken = () => {
//     return localStorage.getItem('token');
//   };

// const axiosInstance = axios.create({
//   baseURL: getBaseURL(),
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;

import axios from "axios";

const getBaseURL = () => {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  return isLocalhost
    ? "http://localhost:3000"
    : "https://a927-197-232-61-200.ngrok-free.app";
};

const getToken = () => {
  return localStorage.getItem("token");
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
  },
});

export default axiosInstance;
