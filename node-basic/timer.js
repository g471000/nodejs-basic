const timeout = setTimeout(() => {
    console.log('Run after 1.5 seconds');
}, 1500);

const interval = setInterval(() => {
    console.log("Run every 1 second");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('Will not be run');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('Run immediately');
});

const immediate2 = setImmediate(() => {
    console.log('Run immediately but will be canceled');
});

clearImmediate(immediate2)