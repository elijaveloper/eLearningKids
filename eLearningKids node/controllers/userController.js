const mongoose = require("mongoose");
const UserModel = require("../models/schemas.js.js").User;

mongoose.connect("mongodb+srv://dbELK_elijah:secretpassword@elearningkids-zdukp.gcp.mongodb.net/test?retryWrites=true", {useNewUrlParser:true});

class UserController {
    static async login(req,res){
        try{
            let result = await UserModel.findOne({username:req.body.username,password:req.body.password}).exec();
            res.send(result);
        }catch(exception){
            res.status(500).send(exception)
        }
    }
}

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = UserController;