import axios, { AxiosError } from "axios";
// import useAuthStore from "../hooks/useAuthStore";
import { BASE_URL } from "./config";
import { getItem } from "./storage";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getItem("jwtToken");
    if (config.headers) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
      //   useAuthStore.setState({ signedInAs: undefined });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
