const express = require('express');
const logger = require('./logger');
const app = express();
const authorize = require('./authorize');

// // This function lets you pass in a middleware that is used for all the rest of the app functions
// app.use(logger);

// // Can add route specific middleware too like this api/*
// app.use('./api', logger)

// fetch post exmaple

// To use multiple middlewares. The order matters.
app.use([authorize, logger]);

// req => middleware => res
app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
})

app.listen(5000, () => {
    console.log(`App listening on port: 5000`)
})