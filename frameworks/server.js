var express = require('express')
var bodyParser = require('body-parser')
var app = express()
// http server
var http = require('http').Server(app)
// setup in backend
var io = require('socket.io')(http)
// for mongo db
var mongoose = require('mongoose')


// serving pages
app.use(express.static(__dirname))

//middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

var dbUrl = 'mongodb://zinox:xoniz@ds229418.mlab.com:29418/learning-node101'

var Message = mongoose.model('Message', {
  name: String,
  message: String
})


// get requests
app.get('/messages', (req, res) => {

  Message.find({}, (err, messages) => {
    res.send(messages)
  })
})

// post request
app.post('/messages', (req, res) => {
  var message = new Message(req.body)
  // for mongodb (mongoose)
  message.save((err) => {
    if (err)
      sendStatus(500)
    io.emit('message', req.body)
    res.sendStatus(200)
  })

})

io.on('connection', (socket) => {
  console.log("A user connected")
})

mongoose.connect(dbUrl, (err) => {
  console.log('Mongo db connection', err)
})

var server = http.listen(3000, () => {
  console.log('Server is listening to port, localhost:', server.address().port)
})