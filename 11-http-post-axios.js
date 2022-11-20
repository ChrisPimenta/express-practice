
/** @type {import("express").RequestHandler} */

const express = require('express')
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'))

// This line lets us access req.body from HTML http requests (Form)
app.use(express.urlencoded({ extended: false }))

// This line lets us access req.body from JS http requests
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, people })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send(`Invalid payload`);
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'No name value provided' })
    }

    res.status(201).json({ sucess: true, person: name });
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})