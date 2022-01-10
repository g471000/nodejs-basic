const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello Server</p>');
    res.end('<p>Hello G47</p>');
})

.listen(8080, () => {
    console.log('Server is running on 8080 port.')
})