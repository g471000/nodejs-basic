const string = 'g';
const number = 47;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key: 'value'
        },
    },
};
console.time('Timer');
console.log("Logging.....");
console.log(string, number, boolean);
console.error('error message is like this');

console.table([{name: 'pikachu', level: 47}, {name: 'mew', level: 99}]);

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('Loop Timer');
for(let i = 0; i < 1000000; i++) {}
console.timeEnd('Loop Timer');

function b() {
    console.trace('Find Error Location...');
}

function a() {
    b();
}

a();

console.timeEnd('Timer');
