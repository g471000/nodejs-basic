function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run function')
    setTimeout(() => {
        console.log('pika');
    }, 0)
    new Promise((resolve) => {
        resolve('raichu');
    }).then(console.log);

    oneMore();
}

setTimeout(run, 5000);