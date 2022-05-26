const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jsontoken = require("jsonwebtoken");
const {registerValidate,loginValidate} = require("../models/Usersjoi");


const controllers = {
    registration:async (req,res)=>{
        try{
            const {error} = registerValidate(req.body);
            if(error)return res.status(400).send(error.message);
            let emailforVerification = await User.findOne({email:req.body.email});
            if(emailforVerification)return res.status(400).send("Email in Use");
            let password = bcrypt.hashSync(req.body.password);
            const user = await new User({name:req.body.name,email:req.body.email,password});
            let savedUser = await user.save();
            console.log(savedUser);
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
        
    },
    login:async (req,res)=>{
        try{
            const {error} = loginValidate(req.body);
            if(error)return res.status(400).send(error.message);
            let userVerificated = await User.findOne({email:req.body.email});
            if(!userVerificated) return res.status(400).send("Email or name not finded");
            if(!(bcrypt.compareSync(req.body.password,userVerificated.password)) || !(userVerificated.name == req.body.name))return res.status(400).send("User Incorrect");
            const token = jsontoken.sign({email:userVerificated.email,admin:userVerificated.admin},process.env.TOKEN_SECRET);
            res.header("Secret-Token",token);
            res.send("User Logged");
        }catch(err){
            res.status(400).send("login Error:"+err);
        }
    }
}

module.exports = controllers;