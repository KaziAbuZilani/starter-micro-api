var http = require('http');
http.createServer(function (req, res) {
    // console.log(`Just got a request at ${req.url}!`)
    // res.write('On');
    // res.end();

    let output = url.parse(req.url, true).query;
    res.write(output);
    res.end();
    

}).listen(process.env.PORT || 3000);
