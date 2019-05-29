const mongoose = require("mongoose");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

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

const AccessLevel = mongoose.model("accesslevel",AccessLevelSchema);
const Manager = mongoose.model("manager",ManagerSchema);

module.exports = {
    AccessLevel,
    Manager
}