const UserModel = require("../models/user.js");
const bcrypt = require("bcryptjs");

class UsersController {

    static async loginAction(req,res){
        try{
            UserModel.findOne({username:req.body.username},function(err,user){
                user.comparePassword(req.body.password,function(err,isMatch){
                    if(err) res.status(500).send(e);

                    //TODO: index
                    res.render("index",{
                        title: user.nickname
                    });
                });
            });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async addUserAction(req,res){
        try{
            let user = new UserModel({
                username:req.body.username,
                password:req.body.password,
                first_name:req.body.first_name,
                middle_name:req.body.middle_name,
                last_name:req.body.last_name,
                dob:req.body.date_of_birth,
                nickname:req.body.nickname
            });

            console.log(user);

            user.save(function(err,user){
                if(err) return console.log(err);
                console.log(user.nickname + "'s account successfully saved!");
                res.render("login",{
                    title:user.nickname
                });
            });

        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }

    static async loginPage(reg,res){
        try{
            res.render('login');
        }catch(e){
            res.status(500).send(e);
        }
    }

    static async addUserPage(reg,res){
        try{
            res.render('user');
        }catch(e){
            res.status(500).send(e);
        }
    }
}

module.exports = UsersController;