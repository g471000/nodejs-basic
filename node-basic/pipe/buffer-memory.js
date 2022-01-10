const fs = require('fs');

const start = process.memoryUsage().rss;
console.log('before:', start);

const data = fs.readFileSync('./big.txt');
fs.writeFileSync('./big_sync.txt', data);

const end = process.memoryUsage().rss;
const diff = end - start + 1;
console.log('buffer:', end);
console.log('diff:', diff);
