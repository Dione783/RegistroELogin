const Joi = require("Joi");


function registerValidate(data){
    const schemaJoi = Joi.object({
        name:Joi.string().required().min(3).max(30),
        email:Joi.string().required().min(6).max(60),
        password:Joi.string().required().min(6).max(100) 
    })
    return schemaJoi.validate(data);
}
function loginValidate(data){
    const schemaJoi = Joi.object({
        name:Joi.string().required().min(3).max(30),
        email:Joi.string().required().min(6).max(60),
        password:Joi.string().required().min(6).max(100)
    })
    return schemaJoi.validate(data);
}

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;