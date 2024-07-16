import axios from "axios";

const api = axios.create({
  baseURL: "https://radarsaude.onrender.com",
  timeout: 30000,
});

export default api;