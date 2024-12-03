import axios from "axios";
import { loadState } from "./store";

const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${loadState("user")?.accessToken}`;

  return config;
});

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  }
);

export { request };
