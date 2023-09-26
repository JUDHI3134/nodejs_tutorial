const fs = require("fs")
const biodata = {
    name:"judhistir",
    age:25,
    place:"balasore"
}

const jsondata = JSON.stringify(biodata);
//console.log(jsondata);
// fs.writeFile("json1.json",jsondata,()=>{
//     console.log("done")
// })

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})

// const objdata = JSON.parse(jsondata)
// console.log(objdata);