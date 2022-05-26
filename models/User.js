const mongoose = require("../database");

const userSchema = mongoose.Schema({
    name:{type:String,required:true,minlength:4,maxlength:35},
    email:{type:String,required:true,minlength:6,maxlength:50},
    password:{type:String,required:true,minlength:6,maxlength:100},
    admin:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
})

const model = mongoose.model("databaUsers",userSchema);

module.exports = model;