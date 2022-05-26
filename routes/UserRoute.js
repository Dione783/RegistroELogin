const express =require("express");
const router = express.Router();
const auth = require("../controllers/Authtoken");

router.post("/admin",auth.authToken,(req,res)=>{
    if(!req.user.admin)return res.status(401).send("acess denied not admin user");
    res.send("Admin connected Sucess");
});

router.post("/person",auth.authToken,(req,res)=>{
    res.send("Connected Sucess");
});

module.exports = app=>app.use("/",router);