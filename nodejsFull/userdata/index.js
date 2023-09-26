const http = require("http");
const fs = require("fs");



const server = http.createServer((req,res)=>{
    if(req.url == "/"){
     res.end("Hii this is my first nodejs Server");
    }else if(req.url == "/contact"){
        res.end("Hii this is my first nodejs contact page");
       }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
            res.end(data);
        })
        res.end("Hii this is my first nodejsuser Api page");
        }else{
        res.end("404 ! error , page not found");
       }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server listen at port number 3000");
})