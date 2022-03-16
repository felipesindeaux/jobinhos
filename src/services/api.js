import axios from "axios";

const api = axios.create({
  baseURL: "https://jobinhos-api.herokuapp.com",
});

export default api;
