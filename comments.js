// Create web server
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const comments = []

app.use(bodyParser.json())

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.post('/comments', (req, res) => {
  comments.push(req.body)
  fs.writeFileSync('comments.json', JSON.stringify(comments))
  res.end()
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})