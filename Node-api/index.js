
const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Express in Node.js");
})

app.get("/api/Users",(req,res)=>{
    res.send("List User");
})

//import route user
const Users = require("./src/route/user.route");
Users(app);
//import route category
const cate= require("./src/route/Category.route");
cate(app);

const port = 8180;
app.listen(port,()=>{
    console.log("http://localhost:"+port);
})


