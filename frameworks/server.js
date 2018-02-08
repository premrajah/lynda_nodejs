var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// serving pages
app.use(express.static(__dirname))

//middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//placeholder messages list
var messages = [
  {
    name: 'Prem Rajah',
    message: 'Hello'
  },
  {
    name: 'Lara Croft',
    message: 'Hi there'
  }
]

// get requests
app.get('/messages', (req, res) => {
  res.send(messages)
})

// post request
app.post('/messages', (req, res) => {
  //  check what data in the body
  // console.log(res.body)
  messages.push(req.body)
  res.sendStatus(200)
})

var server = app.listen(3000, () => {
  console.log('Server is listening to port, localhost:', server.address().port)
})