import http from 'node:http';
import { routesTerminal } from './routes/routes-terminal.js';

const server = http.createServer((request, response) => {
  const { method, url } = request;

  const res = routesTerminal(method, url);

  return response.setHeader('Content-type', 'application/json').end(res);
});

server.listen(3333);
