import * as http from "node:http";

const port = 4444;
const host = "localhost";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("contentType", "text/plain");
  res.end("hello Caro");
});

server.listen(port, host, () => {
  console.log("server is runing ");
});
