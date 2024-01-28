const user_controller = require("../controller/user.controller")
const Users = (app) => {
    app.get("/api/Users/get_list",user_controller.get_list);
    app.post("/api/Users/create",user_controller.create);
    app.put("/api/Users/update",user_controller.update);
    app.delete("/api/Users/remove",user_controller.remove);


    // app.get("/api/Users/get_list",(req,res) => {
    //     res.send("List user");
    // })
    // app.get("/api/Users/create",(req,res) => {
    //     res.send("Create user");
    // })
    // app.get("/api/Users/delete",(req,res) => {
    //     res.send("Delete user")S;
    // })
    // app.get("/api/Users/delete",(req,res) => {
    //     res.send("Delete user");
    // })
}

module.exports = Users;