import { get } from "./get/get.js";
import { post } from "./post/post.js";

export function routesTerminal(method, url) {
  if (method === "POST") {
    return post(url);
  }

  if (method === "GET") {
    return get(url);
  }

  return "Metodo inexistente";
}
