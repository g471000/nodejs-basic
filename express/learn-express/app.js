const express = require('express');
const path = require('path');
const morgan = require("morgan");
const multer = require('multer');
const fs = require("fs");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("nodemon");

dotenv.config()
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('combined'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true
    }
}))

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

try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads folder not existed. Creating uploads folder....')
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('ok');
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