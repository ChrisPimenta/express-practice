const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

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