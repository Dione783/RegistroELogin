const renderController = {
    registration:(req,res)=>{
        try{
            res.render("registration");
        }catch(err){
            res.status(400).send("Failed to render Registration form");
        }
    },
    login:(req,res)=>{
        try{
            res.render("login");
        }catch(err){
            res.status(400).send("Failed to render login form");
        }
    }
}

module.exports = renderController;