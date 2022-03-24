import axios from "axios";

export const api = axios.create({
  baseURL: "https://jobinhos-api.herokuapp.com",
});

export default api;
