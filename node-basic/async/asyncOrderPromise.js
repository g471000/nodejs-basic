const fs = require('fs').promises;

fs.readFile('./heize.txt')
    .then((data) => {
        console.log('#1', data.toString());
        return fs.readFile('./heize.txt');
    })
    .then((data) => {
        console.log('#2', data.toString());
        return fs.readFile('./heize.txt');
    })
    .then((data) => {
        console.log('#3', data.toString());
        return fs.readFile('./heize.txt');
    })
    .then((data) => {
        console.log('#4', data.toString());
        return fs.readFile('./heize.txt');
    })
    .catch((err) => {
        throw err;
    });
