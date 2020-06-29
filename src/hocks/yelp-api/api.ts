import { API_BASE_URL, BEARER_TOKEN } from "./config";
import queryString from "query-string";

export const get = (path: string, queryParams: object) => {
  const query = queryString.stringify(queryParams);
  // @ts-ignore
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    // @ts-ignore
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
};
