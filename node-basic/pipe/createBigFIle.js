const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10_000_000; i++) {
    file.write('Hello! Creating a heize(huge) file....');
}
file.end();