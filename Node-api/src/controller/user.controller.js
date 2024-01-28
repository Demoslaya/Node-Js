const db = require("../config/db");
const {logError} = require("../config/helper")

// const get_list = (req,res) => {
//     db.query("SELECT *FROM role_react_js",(error,row)=>{
//         if(error){
//             res.json({
//                 error:true,
//                 message:error
//             })   
//         }
//         else{
//             res.json({
//                 list:row
//             })  
//         }
//     })
//     // res.send("Request user controller");
// }

const get_list = async (req,res)=>{
    try {
        const [list] = await db.query("SELECT *FROM role_react_js WHERE Id = :ParamID or Name= :Name",{ParamID : 6,Name:"Mark"})
        res.json({
            list:list,
        })
    } catch (err) {
        logError("User.get_list",err)
        res.status(500).send('Internal Server Error');
    }
}
const create = async (req,res) => {
    var Name = req.body.Name;
    var Code = req.body.Code;
    var Status = req.body.Status;
   try {
    var sql = "INSERT INTO role_react_js(Name,Code,Status) VALUES (:Name,:Code,:Status)"
    var Param = {
        Name:Name,
        Code:Code,
        Status:Status
    }
    const [data] = await db.query(sql,Param);
    res.json({
        data:data
    })
   } catch (err) {
    logError("User.create",err)
    res.status(500).send("Internal Server Error")
   }
}
const update = async (req,res) => {
    try {
        var sql = "UPDATE role_react_js SET Name=:Name,Code=:Code,Status=:Status WHERE Id=:Id";
        var Param= {
            Id: req.body.Id,
            Name : req.body.Name,
            Code : req.body.Code,
            Status:req.body.Status
        }
       const [data] = await db.query(sql,Param)
       res.json({
        message:data.affectedRows !=0 ? "Update Success":"Not found",
        data:data
       })
    }
    catch(err){
        logError("User.update",err)
        res.status(500).send("Internal Server Error")
    }
}
const remove = async (req,res) => {
    try {
        var sql = "DELETE FROM role_react_js WHERE Id = :ParamId";
        var Param = {
            ParamId : req.body.Id
        }
        const [data] = await db.query(sql,Param);
        res.json({
            message:data.affectedRows != 0 ? "Remove Success": "Not Found",
            data:data
        })
    }
    catch(error){
        logError("User.remove",err)
        res.status(500).send("Internal Server Error")
    }
}
const block_user = async (req,res) => {
    try {

    }
    catch(error){
        logError("User.block_User",err)
        res.status(500).send("Internal Server Error")
    }
}

module.exports ={get_list,create,update,remove,block_user};