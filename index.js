var http = require('http');
http.createServer(function (req, res) {
    // console.log(`Just got a request at ${req.url}!`)
    // res.write('On');
    // res.end();

    let output = "OFF";
    if (req.url === '/get') {
      res.write(output);
      res.end();
    } else if (req.url === '/write') {
      const status = url.parse(req.url, true).query;
      output = status
      res.write("Status set as" + output);
      res.end();

}).listen(process.env.PORT || 3000);
