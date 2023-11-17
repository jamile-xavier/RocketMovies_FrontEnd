import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-m87e.onrender.com",
});
