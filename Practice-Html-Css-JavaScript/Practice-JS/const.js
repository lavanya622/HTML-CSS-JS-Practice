const  http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    fs.readFile('const.html',(err,data)=>{
        if(err){
            res.writeHead(500,{'content-Type': 'text/plain'})
            res.end("internal server error")
            
        }else{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data)
        }
    })
});
const port = 4000;
server.listen(port,() => {
 console.log("server started at 4000 port");
    

});
