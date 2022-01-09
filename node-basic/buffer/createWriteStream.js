const fs = require('fs');

const writeStream = fs.createWriteStream('./heize2.txt');
writeStream.on('finish', () => {
    console.log('I want to meet Heize');
});

writeStream.write('write Heize as love');
writeStream.write(' and one more time as angel');
writeStream.end();
