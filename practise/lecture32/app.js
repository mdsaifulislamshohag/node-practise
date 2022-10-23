const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }







    /*
            const url = req.url;
           if (url === '/') {

        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body></html>');
        return res.end();

*/


    /*
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');

    res.write('<body><form action="/message" method="POST"><input type="text" nmae="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();

    */



    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>First Page</title><body><div>I am the first page</div></body></head></html>');
    res.end();

});

server.listen(3000);