const mongoose = require("mongoose");
let Schema = mongoose.Schema;

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

const User = mongoose.model("user",UserSchema);

module.exports = User;