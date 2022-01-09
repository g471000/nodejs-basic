const fs = require('fs').promises

fs.readFile('./heize_1_over_1440.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });

fs.writeFile('./heize.txt', 'Heize, she is a queen and a king.')
    .then(() => {
        return fs.readFile('heize.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });