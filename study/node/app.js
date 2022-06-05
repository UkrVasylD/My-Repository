const http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/boy") res.write("Ivan!");
  if (req.url === "/girl") res.write("Olga!");
  if (req.url === "/car") res.write("Tesla!");

  res.end();
});
server.listen(3000);
