const express = require("express");
const path  =  require("path");
const app  = express();
const hbs  = require('hbs');
const port = process.env.PORT || 8000;

const tempPath  = path.join(__dirname,"../public/templates/views");
const partialspath = path.join(__dirname,"../public/templates/Partials");


app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname,"../public")));
hbs.registerPartials(partialspath);
app.set("views",tempPath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get('/weather',(req,res)=>{
    res.render("weather");
})

app.get('*',(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log("server is listening");
});