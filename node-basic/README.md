# Node Basic
## helloWorld.js
We can run the basic hello world code using node.
```
node helloWorld.js
```
Then you will see the result like below:
```
> node helloWorld.js
Hello World
Hello Node
```

## Module
We can also divide files into small multiple files. We can import variables or functions by using require(), and as you can see, you will be able to run the `index.js` and can see `func.js` and `var.js`'s exports are imported and successfully used within `index.js`.
```
> node index
even number
even number
odd number
```

## Console
console is children of the global, but you can skip typing `global`. There are many functions within console, as you can see at `console.js`. You can run the file like below, and will see the result:
```
> node console
Logging.....
g 47 true
error message is like this
┌─────────┬───────────┬───────┐
│ (index) │   name    │ level │
├─────────┼───────────┼───────┤
│    0    │ 'pikachu' │  47   │
│    1    │   'mew'   │  99   │
└─────────┴───────────┴───────┘
{ outside: { inside: { key: 'value' } } }
{ outside: { inside: [Object] } }
Loop Timer: 1.974ms
Trace: Find Error Location...
    at b (/Users/jieunchon/WebstormProjects/nodejs-book/node-basic/console.js:26:13)
    at a (/Users/jieunchon/WebstormProjects/nodejs-book/node-basic/console.js:30:5)
    at Object.<anonymous> (/Users/jieunchon/WebstormProjects/nodejs-book/node-basic/console.js:33:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
Timer: 11.309ms
```

## Timer
Also, there is a function of using as a timer to run functions/logs once, internally or immediately. Check out by run the `timer.js` like below:
```
> node timer.js
Run immediately
Run every 1 second
Run after 1.5 seconds
Run every 1 second
```

