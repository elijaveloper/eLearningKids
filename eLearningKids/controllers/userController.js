const UserModel = require("../models/user.js");

class UserController {
    static async loginAction(req,res){
        try{
            let user = await UserModel.findOne({username:req.body.username,password:req.body.password}).exec();
            res.render('index',{
                title: user.first_name + " " + user.username
            });
        }catch(e){
            res.status(500).send(e);
        }
    }

    static async loginPage(reg,res){
        try{
            res.render('login');
        }catch(e){
            res.status(500).send(e);
        }
    }
}

module.exports = UserController;