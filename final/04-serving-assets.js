const express = require('express')
const path = require('path');
const app = express();

// Resolves and serves all files in the folder - index html will be the main file
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.statusCode(404).send('Not found')
})

app.listen(5000, () => {
    console.log(`App listening on port: 5000`)
})