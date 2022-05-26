const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.get("/",(req,res)=>{
    res.render('index');
});

app.use(express.static(path.join(__dirname,"/views")))
app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routes/Routes')(app);
require("./routes/UserRoute")(app);

app.listen(process.env.PORT,()=>{
    console.log("Rodando na porta:" + process.env.PORT);
});