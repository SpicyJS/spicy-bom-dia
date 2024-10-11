import * as http from "node:http";
import { resolve } from "node:path";

const port = 4444;
const host = "localhost";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.setHeader("contentType", "application/json");
  const data = await getBody(req);
  res.end(JSON.stringify(`Bom dia ${data}`));
});

server.listen(port, host, () => {
  console.log("server is running ");
});

async function getBody(req: http.IncomingMessage) {
  return await new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      resolve(body);
    });
  });
}
