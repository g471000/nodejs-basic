const {odd, even} = require('./var')
const checkNumber = require('./func')

function checkStringLengthOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10))
console.log(checkStringLengthOddOrEven('hello!'))
console.log(checkStringLengthOddOrEven('hello'))
