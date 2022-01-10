const fs = require('fs');

const start = process.memoryUsage().rss;
console.log('before:', start);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big_stream.txt');
readStream.pipe(writeStream);

readStream.on('end', () => {
    const end = process.memoryUsage().rss;
    const diff = end - start + 1;
    console.log('stream:', end);
    console.log('diff:', diff);
})