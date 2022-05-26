const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Usercontroller");
const renderContoller = require("../controllers/Rendercontroller");


router.get("/register",renderContoller.registration);
router.post("/register",controllers.registration);
router.get("/login",renderContoller.login);
router.post("/login",controllers.login);

module.exports = app=>app.use('/auth',router);