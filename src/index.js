const express = require("express");
const path  =  require("path");
const app  = express();
const hbs  = require('hbs');

const tempPath  = path.join(__dirname,"../public/templates/views");
const partialspath = path.join(__dirname,"../public/templates/Partials");


app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname,"../public")));
hbs.registerPartials(partialspath);
app.set("views",tempPath);

app.get("/",(req,res)=>{
    res.render("index");
    //res.render('index.hbs');
})

app.get("/about",(req,res)=>{
    
})

// to show the pages not found in the about page

app.get("/about/*",(req,res)=>{
   
})

//to take the parameters in query String and display them

app.get('/temp',(req,res)=>{
   
})

app.get('/weather',(req,res)=>{
    res.render("weather");
})

// to show the pages not found

app.get('*',(req,res)=>{
    
})

app.get("/",(req,res)=>{
    res.send("Hello from the home page");
});


app.listen(8000,()=>{
    console.log("server is listening");
});