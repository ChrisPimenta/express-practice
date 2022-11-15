const express = require('express')
const app = express()

// Listen for /
app.get('/', (req, res) => {
  res.statusCode(200).send('Home Page');
})

app.get('/about', (req, res) => {
  res.statusCode(200).send('About Page');
})

// For all requests that did not match above and get exit condition from .send
app.all('*', (req, res) => {
  res.status(404).send('<h1>Not found</h1>')
})

app.listen(5000, () => {
  console.log('Listening on port 5000');
})
