const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('1 Want to run for every request!')
    next();
}, (req, res, next) => {
    console.log('2 Want to run for every request!')
    next();
}, (req, res, next) => {
    console.log('3 Want to run for every request!')
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.post('/', (req, res) => {
    res.send('hello express!');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name} category!`);
})

app.get('/about', (req, res) => {
    res.send('hello express! It\'s about page.');
})

app.post('/about', (req, res) => {
    res.send('hello express');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send("Oops! ERROR!")
})

app.listen(3000, () => {
    console.log('Start express server.');
});