let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, people })
}

const createPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'No name value provided' })
    }

    const newPerson = { id: people[people.length - 1].id + 1, name };

    res.status(201).json({ sucess: true, people: [...people, newPerson] });
}


const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const newPeople = [...people];

    const person = newPeople.find(p => p.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: 'NO PERSON FOUND' })
    }

    person.name = name;
    res.status(200).json({ success: true, newPeople })
}

const deletePerson = (req, res) => {
    console.log('tried');
    const { id } = req.params;
    const person = people.find(p => p.id === Number(id));

    if (!person) {
        res.status(404).json({ success: false, msg: 'No person with id: ' + id })
    }

    const newPeople = people.filter(p => p.id !== Number(id));

    res.status(200).json({ success: true, people: newPeople });
}

module.exports = { getPeople, createPerson, updatePerson, deletePerson }