const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('content-type', 'text/html');

    res.write('<html><header><title>this is first page</title><body>abc........</body></header></html>')
    res.end();
});

server.listen(3000);