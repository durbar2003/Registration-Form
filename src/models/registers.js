const mongoose = require("mongoose");
const durbarSchema=new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const Durbarmodel= new mongoose.model("Durbarmodel", durbarSchema);
module.exports = Durbarmodel;