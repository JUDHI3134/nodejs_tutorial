const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName",()=>{
//      console.log("My name is Judhistir Behera");
// })
// event.on("sayMyName",()=>{
//     console.log("your name is peetabas");
// })
// event.on("sayMyName",()=>{
//     console.log("your name is biswajit");
// })
// event.emit("sayMyName");

event.on("checkpage",(sc,msg)=>{
    console.log(`the status code is ${sc} and the message is ${msg}`);
})
event.emit("checkpage",200,"ok");