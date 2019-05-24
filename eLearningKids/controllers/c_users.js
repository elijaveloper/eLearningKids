const mongoose = require("mongoose");
const User = require("../models/schemas.js").User;

mongoose.connect("mongodb+srv://dbELK_elijah:secretpassword@elearningkids-zdukp.gcp.mongodb.net/test?retryWrites=true", {useNewUrlParser:true});

function login(_username,_password){
    User.findOne({username:_username,password:_password}, function(err,user){
        return user.first_name;
    });
}

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = this;