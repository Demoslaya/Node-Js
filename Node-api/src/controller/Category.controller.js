const db = require("../config/db");
const {logError} = require("../config/helper");


const get_list = async (req,res) =>{
    try {
     const [list] = await db.query("SELECT *FROM category WHERE Id = :Id or Name =:Name",{Id:2,Name:"Mac Book Air M1 2020"});
     res.json({
        list:list
     })
    // res.send("List")
    } catch (err) {
        // logError("Category.get_list",err)
        res.status(500).send("Error")
    }
}

const create = async (req,res) =>{
    try {
   
        var sql = "INSERT INTO category (Name,Description,Status) VALUES (:Name,:Description,:Status)";
        var Param ={
            Name:req.body.Name,
            Description : req.body.Description,
            Status : req.body.Status
        }
        const [data] = await db.query(sql,Param);     
        res.json({  
            message:data.affectedRows != 0 ? "Create Success!":"Not Found!",
            data:data
        })
        // res.send("create")
    } catch (err) {
        // console.log(error),
        logError("Category.create",err)
        res.status(500).send('Internal Server Error')
    }
}
const update = async (req,res) =>{
    try {
        var sql = "UPDATE category SET Name=:Name,Description=:Description,Status=:Status WHERE Id= :Id";
        var Param ={
            Id:req.body.Id,
            Name:req.body.Name,
            Description : req.body.Description,
            Status : req.body.Status
        }
        const [data] = await db.query(sql,Param);     
        res.json({
            message:data.affectedRows != 0 ? "Update Success!":"Not Found!",
            data:data
        })
    } catch (err) {
        logError("Category.update",err)
        res.status(500).send("Internal Server Error")
    }
}
const remove = async (req,res) =>{
    try {
        var sql = "DELETE FROM category WHERE Id=:Id";
        var Param = {
            Id : req.body.Id,
        }
        const [data] = await db.query(sql,Param);
        res.json({
            message:data.affectedRows != 0 ?"Delete Success!":"Not Found!",
            data:data
        })
    } catch (err) {
        logError("Category.remove",err)
        res.status(500).send('Internal Server Error')
    }
}


module.exports = {get_list,create,update,remove};