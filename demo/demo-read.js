var fs = require('fs')


//read directory
fs.readdir('C:/Users/Zinox/Documents/temp', (err, data) => {
 console.log(data)
})

var data = {
  "name": "Bob"
}

// writing files 
// fs.writeFile('data-write.json', JSON.stringify(data), (err) => {
//   console.log("finsihed ", err)
// })