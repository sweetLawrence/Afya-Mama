  import axios from 'axios';

  const getBaseURL = () => {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      return isLocalhost ? 'http://localhost:3000' : 'http://localhost:3000';
    };
    
    const getToken = () => {
      return localStorage.getItem('token');
    };
    
  const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default axiosInstance;
