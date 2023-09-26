const fs = require("fs");


//          using Syncronus file system

//create a folder
//fs.mkdirSync("judhi");

//create file and text something in this file
//fs.writeFileSync("judhi/bio.txt","hii my name is judhistir Behera");


//add mode data in to the file
// fs.appendFileSync("judhi/bio.txt"," Please subscribe to my channel...");


//to read data in to the file
// const data = fs.readFileSync("judhi/bio.txt","utf-8");
// console.log(data);

//to rename the file
//fs.renameSync("judhi/bio.txt","judhi/myBio.txt");

//to delete the file
//fs.unlinkSync("judhi/myBio.txt");

//to delete the created folder
//fs.rmdirSync("judhi");