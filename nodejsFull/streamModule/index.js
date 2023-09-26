const fs =require("fs");
const http = require("http");

const server = http.createServer();

//this type of stream like first download and then read

// server.on("request",(req,res)=>{
//   var fs = require("fs");
//   fs.readFile("input.txt", (err,data)=>{
//     if(err) return console.log(err);
//     res.end(data);
//   });

// });

// server.on("request",(req,res)=>{

// const rstream = fs.createReadStream("input.txt");

// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on("end",()=>{
//     res.end();
// });
// })

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
})

server.listen(8000,"127.0.0.1",(err)=>{
    console.log("server listen port number 8000");
})
