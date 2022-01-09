const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if (isMainThread) { // Main Thread
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));

    for (let worker of threads) {
        worker.on('message', (value) => console.log('From Worker', value))
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('Workers are all done!')
            }
        });
    }
} else { // Worker Thread
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}