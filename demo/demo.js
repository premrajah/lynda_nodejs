var _ = require("lodash")
var fs = require("fs")


// Random number lodash
// console.log(_.random(1, 101));

// var d = require("./demo-data.json")
// console.log(d.name)

fs.readFile("./demo-data.json", 'utf-8', (err, data) => {
  var data = JSON.parse(data)
  console.log(data.name)
})