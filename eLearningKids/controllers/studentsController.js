const StudentModel = require("../models/student.js");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

class StudentsController {

    static async addAction(req,res){
        try{
            let student = new StudentModel({
                user_id:mongoose.Types.ObjectId(req.body.user_id),
                student_number: req.body.student_number,
            });

            student.classes.class_id = mongoose.Types.ObjectId(req.body.class_id);
            student.classes.timestamp = new Date();

            console.log(user);

            student.save(function(err,student){
                if(err) return console.log(err);
                console.log(student.user_id + "'s student record has been successfully saved!");
                res.redirect("/students");
            });

        }catch(e){
            res.status(500).send(e);
            console.log(e);
        }
    }

    static async page(reg,res){
        try{
            let students = await StudentModel.find({});
            res.render('student',{students:students});
        }catch(e){
            res.status(500).send(e);
        }
    }
}

module.exports = StudentsController;