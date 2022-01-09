const fs = require('fs').promises;

/**
 * This is async, so the call backs will start at the same time,
 * and it is not guaranteed to be finished in order.
 */
fs.readFile('./heize.txt', (err, data) => {
    if (err) {
        throw err;
    }
}).then(data => {
    console.log('#1', data.toString());
});

fs.readFile('./heize.txt', (err, data) => {
    if (err) {
        throw err;
    }
}).then(data => {
    console.log('#2', data.toString());
});

fs.readFile('./heize.txt', (err, data) => {
    if (err) {
        throw err;
    }
}).then(data => {
    console.log('#3', data.toString());
});

fs.readFile('./heize.txt', (err, data) => {
    if (err) {
        throw err;
    }
}).then(data => {
    console.log('#4', data.toString());
});
