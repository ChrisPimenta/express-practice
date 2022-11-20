const express = require('express');
const app = express();

// Middleware function
// Express adds req, res and next
// IMPORTANT: With middleware you always have to either terminate it with .send or next() to continue whatever code is inside of your app.get.
const logger = (req, res, next) => {
    const { method, url } = req;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}

// req => middleware => res
app.get('/', logger, (req, res) => {
    res.send('Home');
})

app.get('/about', logger, (req, res) => {
    res.send('About');
})


app.listen(5000, () => {
    console.log(`App listening on port: 5000`)
})