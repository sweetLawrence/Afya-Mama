  import axios from 'axios';

  const getBaseURL = () => {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      return isLocalhost ? 'https://offering.pockethost.io' : 'https://offering.pockethost.io';
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
