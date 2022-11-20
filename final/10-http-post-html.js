
/** @type {import("express").RequestHandler} */

const express = require('express')
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'))

// parse form data - You need this when you are accepting a post from a FORM otherwise the body would be empty
// HTML requests need to have urlencoded
app.use(express.urlencoded({ extended: false }))

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

// TO see it - rename methods-public/htmlindex to .index. and the otiher to javascript.html

app.listen(5000, () => {
    console.log('Listening on port 5000')
})