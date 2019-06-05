const SubjectModel = require("../models/subject.js");
const bcrypt = require("bcryptjs");

class SubjectsController {

    static async subjectsPage(req,res){
        try{
            SubjectModel.find({},function(err,subjects){
                if(err) res.status(500).send(e);
                res.render('subject',{
                    title:"Subject",
                    subjects:subjects
                });
            });
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    static async addSubjectAction(req,res){
        try{
            let subject = new SubjectModel({
                subject_name: req.body.subject_name,
                subject_description: req.body.subject_description
            });

            subject.save(function(err,subject){
                if(err) return console.log(err);
                console.log(subject.subject_name + " subject has been successfully saved!");
                res.redirect("/subjects");
            });
        }catch(e){
            res.status(500).send(e);
        }
    }
}

module.exports = SubjectsController;