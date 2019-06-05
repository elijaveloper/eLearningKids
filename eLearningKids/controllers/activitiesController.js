const ActivityModel = require("../models/activity.js").Activity;
const ActivityTypeModel = require("../models/activity.js").ActivityType;
const SubjectModel = require("../models/subject.js");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

class ActivitiesController {
    
// router.get('/',activitiesController.showActivitiesPage);
// router.get('/activitytype',activitiesController.showActivityTypesPage);
// // router.post('/:id',userController.activitiesAction);

// router.get('/add',activitiesController.addPage);
// router.post('/add',activitiesController.addAction);

// router.get('/activitytype/add',activitiesController.actTypeAddPage);
// router.post('/activitytype/add',activitiesController.actTypeAddAction);

    static async activitiesPage(req,res){
        try{
            let subjects = await SubjectModel.find({});
            let activityTypes = await ActivityTypeModel.find({});
            let activities = await ActivityModel.find({});
            res.render('activity',{
                title:"Activities",
                activities:activities,
                activityTypes:activityTypes,
                subjects:subjects
            });
            // ActivityTypeModel.find({},function(err,activityTypes){
            //     ActivityModel.find({},function(err,activities){
            //         if(err) res.status(500).send(e);
            //         res.render('activity',{
            //             title:"Activities",
            //             activities:activities,
            //             activityTypes:activityTypes,
            //             subjects:subjects
            //         });
            //     });
            // });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async activityTypesPage(req,res){
        try{
            ActivityTypeModel.find({},function(err,activityTypes){
                if(err) res.status(500).send(e);
                res.render('activitytypes',{title:"Activity Types",activityTypes:activityTypes});
            });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async addActivityAction(req,res){
        try{
            let activity = new ActivityModel({
                activity_name:req.body.activity_name,
                activity_type_id: mongoose.Types.ObjectId(req.body.activity_type_id),
                score_limit: req.body.score_limit,
                subject_id: mongoose.Types.ObjectId(req.body.subject_id),
                time_limit: req.body.time_limit, // in milliseconds
                config_file: req.body.config_file
            });

            activity.save(function(err,activity){
                if(err) return console.log(err);
                console.log(activity.activity_name + " activity has been successfully saved!");
                res.redirect("/activities");
            });
        }catch(e){
            res.status(500).send(e);
        }
    }

    static async addActivityTypeAction(req,res){
        try{
            let activityType = new ActivityTypeModel({
                activity_type_name:req.body.activity_type_name,
                activity_type_description:req.body.activity_type_description
            });

            activityType.save(function(err,activityType){
                if(err) return console.log(err);
                console.log(activityType.activity_type_name + " activity type has been successfully saved!");
                res.redirect("/activities/types");
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

module.exports = ActivitiesController;