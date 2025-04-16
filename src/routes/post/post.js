import { ROUTE_NOT_FOUND_IN_API } from "../../utils/constantes/constantes.js";
import { getBasePath } from "../../utils/functions/get-base-url.js";
import { user } from "./user/user-post.js";

export function post(url) {
  const method = "POST";
  const baseUrl = getBasePath(url);

  if (baseUrl === "user") {
    return user(url, method);
  }

  if (!baseUrl) {
    return "CONNECT";
  }

  return ROUTE_NOT_FOUND_IN_API;
}
