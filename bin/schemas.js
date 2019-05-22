const mongoose = require("mongoose");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

const ClassInfoSchema = new Schema({
    acad_year: {
        type: Number
    },
    class_level: {
        type: Number
    },
    class_section: {
        type: Number
    }
});

const SubjectSchema = new Schema({
    subject_name: {
        type: String
    },
    subject_description: {
        type: String
    }
});

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    first_name: String,
    middle_name: String, 
    last_name: String,
    nickname: String,
    dob: Date
});

const StudentInfoSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    class_id: {
        type: Schema.Types.ObjectId,
        ref: "classinfo"
    },
    student_number: {
        type: Number
    },
    scorelog: [{
        activity_id: {
            type: Schema.Types.ObjectId,
            ref: "activity"
        },
        timestamp: Date,
        score: Number
    }]
});

const AccessLevelSchema = new Schema({
    access_name: String,
    access_level: Number
});

const ManagerSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    first_name: String,
    middle_name: String,
    last_name: String,
    dob: Date,
    phone_number:{
        type: String,
        match: [/^(\+\d{1,3})?\d{10}$/, "Please enter a valid Thai mobile number."]
    },
    email:{
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    access_level_id:{
        type: Schema.Types.ObjectId,
        ref: "accesslevel"
    }
});

const ActivityTypeSchema = new Schema({
    activity_type_name: String
});

const ActivitySchema = new Schema({
    activity_name: {
        type: String,
        required: true
    },
    activity_type_id: {
        type: Schema.Types.ObjectId,
        ref: "activitytype"
    },
    score_limit: Number,
    subject_id: Number,
    isTimeLimited: Boolean,
    Time_limit: Number, // in milliseconds
    config_file: String
});

const ClassInfo = mongoose.model("classinfo", ClassInfoSchema);
const Subject = mongoose.model("subject",SubjectSchema);
const User = mongoose.model("user",UserSchema);
const StudentInfo = mongoose.model("studentinfo",StudentInfoSchema);
const AccessLevel = mongoose.model("accesslevel",AccessLevelSchema);
const Manager = mongoose.model("manager",ManagerSchema);
const ActivityType = mongoose.model("activitytype",ActivityTypeSchema);
const Activity = mongoose.model("activity",ActivitySchema);

module.exports = {
    ClassInfo,
    Subject,
    User,
    StudentInfo,
    AccessLevel,
    Manager,
    ActivityType,
    Activity,
}