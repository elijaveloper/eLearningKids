const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

const AccessLevelSchema = new Schema({
    access_name: String,
    access_level: Number,
    access_description: String
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

ManagerSchema.pre('save', function (next) {
    var manager = this;
    if (!manager.isModified('password')) {return next()};
    bcrypt.hash(manager.password,SALT_WORK_FACTOR).then((hashedPassword) => {
        manager.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})

ManagerSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const AccessLevel = mongoose.model("accesslevel",AccessLevelSchema);
const Manager = mongoose.model("manager",ManagerSchema);

module.exports = {
    AccessLevel,
    Manager
}