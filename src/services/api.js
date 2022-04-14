require('dotenv').config()
import axios from "axios";
// import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:4000/api'
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;