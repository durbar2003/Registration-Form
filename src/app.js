const express = require ('express');
const path = require("path");
const app=express();
const fs = require("fs");
const hbs= require("hbs");
require("./db/conn");
const register=require("./models/registers");
const Durbarmodel = require('./models/registers');
const port= process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "hbs");
app.set("views", temp_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/cart", (req,res)=>{
    res.render("cart")
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.post("/register", async(req,res)=>{
    try{
        res.send(req.body);
        const newUser=new Durbarmodel({
        email: req.body.email,
        password: req.body.password
        })
        const registered=await newUser.save();
        res.status(201).render(index);
    }
    catch(error){
    res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at port no ${port}`);
})