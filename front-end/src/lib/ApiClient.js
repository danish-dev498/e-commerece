import axios, { AxiosError } from "axios";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding the JWT token to request headers
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Add token to headers
      }
    } catch (error) {
      console.error("Error getting authentication token:", error);
      // Handle error or redirect to login
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling global errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    // Here you can handle errors globally, log them or transform them before throwing
    // You can also integrate with the queryErrHandler function if needed

    Promise.reject(error)
);

export default axiosInstance;
