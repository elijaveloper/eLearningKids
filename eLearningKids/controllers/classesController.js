const classModel = require("../models/class.js");

class classesController {
    
// router.get('/',classesController.showclassesPage);
// router.get('/classtype',classesController.showclassTypesPage);
// // router.post('/:id',userController.classesAction);

// router.get('/add',classesController.addPage);
// router.post('/add',classesController.addAction);

// router.get('/classtype/add',classesController.actTypeAddPage);
// router.post('/classtype/add',classesController.actTypeAddAction);

    static async classesPage(req,res){
        try{
            let classes = await classModel.find({});
            res.render('class',{
                title:"classes",
                classes:classes
            });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async addClassAction(req,res){
        try{
            let _class = new classModel({
                acad_year:req.body.acad_year,
                class_level:req.body.class_level,
                class_section:req.body.class_section
            });

            _class.save(function(err,_class){
                if(err) return console.log(err);
                console.log(_class.class_section + " class has been successfully saved!");
                res.redirect("/classes");
            });
        }catch(e){
            res.status(500).send(e);
        }
    }
    // static async registerAction(req,res){
    //     try{
    //         let user = new UserModel({
    //             username:req.body.username,
    //             password:req.body.password,
    //             first_name:req.body.first_name,
    //             middle_name:req.body.middle_name,
    //             last_name:req.body.last_name,
    //             dob:req.body.date_of_birth,
    //             nickname:req.body.nickname
    //         });

    //         console.log(user);

    //         user.save(function(err,user){
    //             if(err) return console.log(err);
    //             console.log(user.nickname + "'s account successfully saved!");
    //             res.render("login",{
    //                 title:user.nickname
    //             });
    //         });

    //     }catch(e){
    //         res.status(500).send(e);
    //         console.log(e);
    //     }
    // }

    // static async loginPage(reg,res){
    //     try{
    //         res.render('login');
    //     }catch(e){
    //         res.status(500).send(e);
    //     }
    // }

    // static async registerPage(reg,res){
    //     try{
    //         res.render('register');
    //     }catch(e){
    //         res.status(500).send(e);
    //     }
    // }
}

module.exports = classesController;