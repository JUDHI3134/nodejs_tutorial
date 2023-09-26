const fs = require("fs");


//creating a new file
//fs.writeFileSync("read.txt","Welcome to my channel");

// fs.appendFileSync("read.txt"," How are you i am fine");

const buf_data = fs.readFileSync("read.txt","utf-8");

const org = buf_data.toString();
console.log(org);