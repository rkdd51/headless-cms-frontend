import axios from "axios";

const api = axios.create({
  //  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "http://0.0.0.0:1337",
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

export const fetchCategories = async () => api.get("/api/categories");
