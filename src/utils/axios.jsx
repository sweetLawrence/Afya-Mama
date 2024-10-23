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




  import axios from 'axios';

// Function to determine baseURL
const getBaseURL = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  return isLocalhost ? 'http://localhost:3000' : 'https://e8e3-102-212-236-177.ngrok-free.app/';
};

// Function to get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',  // Custom header for ngrok
    ...(getToken() && { 'Authorization': `Bearer ${getToken()}` }) // Add token to the Authorization header if it exists
  },
});

export default axiosInstance;
