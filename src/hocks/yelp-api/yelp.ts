import axios from "axios";
import { API_BASE_URL, BEARER_TOKEN } from "./config";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});
