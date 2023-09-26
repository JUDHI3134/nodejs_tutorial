const fs = require("fs");

//create a file in Asyncronous file structer

// fs.writeFile("read.txt","Hii today is awesome day..👌",(err)=>{
//     console.log("file is created");
// })


// fs.appendFile("read.txt","Please subscribe to my channel...",(err)=>{
//     console.log("file Updated..");
// })


fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
})