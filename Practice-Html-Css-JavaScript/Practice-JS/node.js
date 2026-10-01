const  http = require("http");

const server = http.createServer((req,res)=>{
    res.statuscode = 200;
    res.setHeader('Content-Type','text/plain')
       
if (req.url==='/'){
    res.end("main page")

}else if (req.url==="/about"){
    res.end("this is about page")
}else if(req.url==="/context") {
    res.end("this is context page")
}else if(req.url==="/delet"){
    res.end("this is a delete page")
}

else{
    res.statusCode = 404;
    res.end("404 error")
}

});
const port = 4000;
server.listen(port,() => {
 console.log("server started at 4000 port");
});
const http = require("http")

const servr = http.createServer((req,res) => {
    res.end("hello from the server")
    
})

server.listen(8000,'127.0.0.1',() => {
    console.log("started on 8000");
})

