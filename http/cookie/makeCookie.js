const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie': 'mycookie=pikachu' })
    res.end('Hello Pikachu Cookie');
})

.listen(8083, () => {
    console.log('Server is running on 8083 port.')
})