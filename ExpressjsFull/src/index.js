const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//built in middleware 

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");


// to set view engine
app.set("view engine","hbs");
app.set("views",templatepath);

//app.use(express.static(staticpath));
hbs.registerPartials(partialspath);


// set view engine route
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/",(req,res)=>{
    res.send("hello World");
})

app.get("/about",(req,res)=>{
    res.send("Welcome to my About us page");
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to my contact us page");
})
app.get("/download",(req,res)=>{
    res.json({
        id:1,
        name:"judhistir"
    });
})
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:"opps ! inside About us page couldn't be found"
    });
})

app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"opps ! page couldn't be found"
    });
})

app.listen(3000,(err)=>{
    console.log("successfully running");
})