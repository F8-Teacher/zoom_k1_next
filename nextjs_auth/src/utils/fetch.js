import { CONFIG } from "@/constants/config.constant";
import { getAccessToken } from "@/actions/auth.action";
export const fetchWrapper = async (url, options = {}) => {
  url = `${CONFIG.SERVER_API}${url}`;
  const allHeaders = new Headers(options.headers || {});
  const accessToken = await getAccessToken();
  // console.log(`request: ${url}`, `accessToken: ${accessToken}`);

  if (accessToken) {
    allHeaders.set("Authorization", `Bearer ${accessToken}`);
  }
  return fetch(url, {
    ...options,
    headers: allHeaders,
  });
};
