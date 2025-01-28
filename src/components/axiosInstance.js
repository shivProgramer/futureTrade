import axios from "axios";
import { API_URL } from "../utils/Config";

const axiosInstance = axios.create({
  baseURL: API_URL, 
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // No token logic required
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
