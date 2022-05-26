const jwt = require("jsonwebtoken");

const auth=
{
    authToken:async(req,res,next)=>{
    try{
        if(!req.header("Secret-Token")) return res.status(401).send("Acess denied");
        const token = jwt.verify(req.header("Secret-Token"),process.env.TOKEN_SECRET);
        req.user = token;
        next();
    }catch(error){
        res.send(error);
        console.log(error);
    }
}
}

module.exports = auth;
