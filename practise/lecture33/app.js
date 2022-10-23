const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.write('<html><head><title>Enter Message</title></head><body><form action ="/message " method="POST"><input type="text" name="name"><button type="text">Send</button></form></body></html>');
        return res.end();

    };

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }


    res.write('<html><head><title>First Page</title></head><body>First Page</body></html>');
    res.end();


})

server.listen(3000);