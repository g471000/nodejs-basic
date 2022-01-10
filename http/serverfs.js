const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        res.writeHead(200, {'Content-TYpe': 'text/html; charset=utf-8'});
        const data = await fs.readFile('./server.html');
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(200, {'Content-TYpe': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
})

    .listen(8080, () => {
        console.log('Server is running on 8080 port.')
    })