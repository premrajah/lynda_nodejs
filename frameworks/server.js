var express = require('express')
var app = express()

// serving pages
app.use(express.static(__dirname))

var server = app.listen(3000, () => {
  console.log('Server is listening to port, localhost:', server.address().port)
})