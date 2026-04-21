import { getAccessToken, makeRefreshToken } from "@/actions/auth.action";
import { CONFIG } from "@/constants/config.constant";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: CONFIG.SERVER_API,
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
let refreshTokenPromise = null;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.config);

    if (error.status === 401) {
      //Refresh
      if (!refreshTokenPromise) {
        refreshTokenPromise = makeRefreshToken();
      }
      const refreshStatus = await refreshTokenPromise;
      refreshTokenPromise = null;
      if (refreshStatus) {
        //retry
        return axiosInstance(error.config);
      } else if (
        window.location.pathname !== "/auth/login" &&
        error.config.url !== "/profile/me" &&
        error.config.url !== "/shopping-cart"
      ) {
        return (window.location.href = "/auth/login");
      }
    }
    return Promise.reject(error);
  },
);
