
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

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'No name value provided' })
    }

    const newPerson = { id: people[people.length - 1].id + 1, name };

    res.status(201).json({ sucess: true, people: [...people, newPerson] });
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

app.put('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const newPeople = [...people];

    const person = newPeople.find(p => p.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: 'NO PERSON FOUND' })
    }

    person.name = name;
    res.status(200).json({ success: true, newPeople })
})

app.delete('/api/postman/people/:id', (req, res) => {
    console.log('tried');
    const { id } = req.params;
    const person = people.find(p => p.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: 'No person with id: ' + id })
    }

    const newPeople = people.filter(p => p.id !== Number(id));

    res.status(200).json({ success: true, people: newPeople });
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})