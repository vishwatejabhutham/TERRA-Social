import axios from 'axios';

// Base URL from environment variables
const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api.terrasocial.dummy';
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ts_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Basic global error structure
    const customError = {
      success: false,
      message: error.response?.data?.message || 'An unexpected error occurred.',
      errorCode: error.response?.data?.errorCode || 'UNKNOWN_ERROR',
      status: error.response?.status
    };

    if (error.response?.status === 401) {
      // Handle unauthorized (e.g., clear token, redirect to login)
      localStorage.removeItem('ts_token');
      // window.location.href = '/login'; 
    }

    return Promise.reject(customError);
  }
);

export default axiosInstance;
