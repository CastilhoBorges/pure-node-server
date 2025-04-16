// Padrão de importação CommonJS
// const http = require("http");

// ESModules
// Para usar no node nativamente, precisamos definir type:modules no package.json
// Usamos node:module para definir que é um module interno do node
import http from "node:http";
import { routesTerminal } from "./routes/routes-terminal.js";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  const res = routesTerminal(method, url);

  return response.end(res);
});

server.listen(3333);
