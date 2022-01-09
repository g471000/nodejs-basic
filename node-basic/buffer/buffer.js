const buffer = Buffer.from('Translate this sentence to buffer because I love Heize.');

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('Heize '), Buffer.from('is '), Buffer.from('so '), Buffer.from('wonderful.')];
console.log(Buffer.concat(array).toString());

console.log(Buffer.alloc(7));

