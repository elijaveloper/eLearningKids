const ManagerModel = require("../models/manager.js").Manager;
const AccessLevelModel = require("../models/manager.js").AccessLevel;

class managersController {

    static async loginAction(req,res){
        try{
            ManagerModel.findOne({username:req.body.username},function(err,manager){
                manager.comparePassword(req.body.password,function(err,isMatch){
                    if(err) res.status(500).send(e);
                    res.render("index",{
                        title: manager.first_name
                    });
                });
            });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async addManagerAction(req,res){
        try{
            let manager = new ManagerModel({
                username:req.body.username,
                password:req.body.password,
                first_name:req.body.first_name,
                middle_name:req.body.middle_name,
                last_name:req.body.last_name,
                dob:req.body.date_of_birth,
                phone_number:req.body.phone_number,
                email:req.body.email
            });

            manager.save(function(err,manager){
                if(err) return console.log(err);
                console.log(manager.first_name + "'s account successfully saved!");
                res.redirect("/managers");
            });

        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }

    static async addAccessLevelAction(req,res){
        try{
            let al = new AccessLevelModel({
                access_name:req.body.access_name,
                access_level:req.body.access_level,
                access_description:req.body.access_description
            });

            al.save(function(err,_al){
                if(err) return console.log(err);
                console.log(_al.access_name + " successfully saved!");
                console.log(_al);
                res.redirect("/managers/access");
            });

        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }

    static async managersPage(reg,res){
        try{
            let managers = await ManagerModel.find({});
            res.render("manager",{
                title:"Managers",
                managers:managers
            })
        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }

    static async accessLevelPage(reg,res){
        try{
            let al = await AccessLevelModel.find({});
            res.render("access",{
                title:"Access",
                accessLevel:al
            })
        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }
}

module.exports = managersController;