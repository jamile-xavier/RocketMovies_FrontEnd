import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3334" });

api.get("/users/:id");
