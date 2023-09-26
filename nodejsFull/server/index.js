const http = require("http");


//createing nodejs server
// const server = http.createServer((req,res)=>{
//     res.end("Hii this is my first nodejs Server");
// })

// server.listen(3000,"127.0.0.1",()=>{
//     console.log("Server listen at port number 3000");
// })


const server = http.createServer((req,res)=>{
    if(req.url == "/"){
     res.end("Hii this is my first nodejs Server");
    }else if(req.url == "/contact"){
        res.end("Hii this is my first nodejs contact page");
       }else if(req.url == "/about"){
        res.end("Hii this is my first nodejs About us page");
       }else{
        res.end("404 ! error , page not found");
       }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server listen at port number 3000");
})