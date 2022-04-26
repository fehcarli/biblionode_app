require('dotenv').config()
import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:4000/api',
  headers: {
    contentType: 'application/json'
  }
});

export default api;