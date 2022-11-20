
/** @type {import("express").RequestHandler} */

const express = require('express')
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// Static assets
app.use(express.static('./methods-public'))

// Parse form data
// This line lets us access req.body from HTML http requests (Form)
app.use(express.urlencoded({ extended: false }))

// parse json
// This line lets us access req.body from JS http requests
app.use(express.json());

// All the logic is now encapsulated inside people.js router
app.use('/api/people', people);

app.use('/login', auth);

app.listen(5000, () => {
    console.log('Listening on port 5000')
})