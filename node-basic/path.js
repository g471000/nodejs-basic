const path = require('path');

const filename = __filename;

console.log('path.sep', path.sep);
console.log('path.delimiter', path.delimiter);
console.log('---------------------------------');
console.log('path.dirname(filename):', path.dirname(filename));
console.log('path.extname(filename):', path.extname(filename));
console.log('path.basename(filename):', path.basename(filename));
console.log('path.basename - extname:', path.basename(filename, path.extname(filename)));
console.log('---------------------------------');
console.log('path.parse(filename)', path.parse(filename));
console.log('path.isAbsolute(path.parse(filename).root):', path.isAbsolute(path.parse(filename).root));
console.log('path.isAbsolute(path.extname(filename)))', path.isAbsolute(path.extname(filename)));
console.log('path.normalize(path.dirname(filename))', path.normalize(path.dirname(filename)));
console.log('---------------------------------');
console.log('path.relative(): ', path.relative(path.dirname(filename), path.basename(filename)));
console.log('path.join():', path.join(__dirname, `..`, `..`, `/users`, '.'));
