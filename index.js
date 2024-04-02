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
    output = status;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Status set as: " + output);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
