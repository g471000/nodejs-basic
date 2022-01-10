const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./when_it_snows.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./when_it_snow.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
