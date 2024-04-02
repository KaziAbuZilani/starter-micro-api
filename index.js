const http = require("http");
const url = require("url");

const port = 3000;

let output = "OFF";

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  const path = q.pathname;
  const { status } = q.query;

  if (path == "/read") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(output);
  } else if (path == "/write") {
    if (status) {
      // Update status if provided
      output = status;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Status set as: " + output);
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Error: 'status' parameter is missing");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Error: Endpoint not found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
