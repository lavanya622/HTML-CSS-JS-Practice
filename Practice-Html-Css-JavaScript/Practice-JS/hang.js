const os = require('os')


console.log(os.version());


const fs = require('fs');

fs.writeFile("aimla.txt", "lavanya",(err) => {
  if (err) throw err;
  console.log('File has been saved!')
})
fs.readFile("aimla.txt","utf8",(err,data) => {
    if(err) throw err;
    console.log(data)
    
    
})
fs.unlink("aimla.txt",(err) => {
    if(err) throw err;
    console.log("file has been removed")
    
    
})