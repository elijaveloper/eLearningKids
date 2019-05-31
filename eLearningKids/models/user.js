const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
let Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

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

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {return next()};
    bcrypt.hash(user.password,SALT_WORK_FACTOR).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


const User = mongoose.model("user",UserSchema);

module.exports = User;