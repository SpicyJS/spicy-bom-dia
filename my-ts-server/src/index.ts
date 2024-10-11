import * as http from "node:http";

const port = 4444;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.setHeader("contentType", "application/json");
  const data = {
    status: "OK",
    message: "Yeah!",
  };

  let incomingData = "";
  req.on("data", (chunk) => {
    incomingData += chunk;
  });
  req.on("end", () => {
    console.log(JSON.parse(incomingData))
  });

  res.end(JSON.stringify(data));
});

server.listen(port, host, () => {
  console.log("server is running ");
});
