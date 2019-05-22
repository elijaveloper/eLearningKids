var mongoose = require("mongoose");
var Schemas = require("./bin/schemas.js");

mongoose.connect("mongodb+srv://dbELK_elijah:secretpassword@elearningkids-zdukp.gcp.mongodb.net/test?retryWrites=true", {useNewUrlParser:true});

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {

  Schemas.StudentInfo
    .findOne({ _id:"5ce4f2fd481dc32718072814"})
    .populate('user_id')
    .exec(function (err, user) {
      if (err) return handleError(err);
      console.log(user);
    });

  // var testManager = new Schemas.Manager({
  //   username: "testmanager",
  //   password: "123456789",
  //   first_name: "test",
  //   middle_name: "m",
  //   last_name: "anager",
  //   dob: [new Date()],
  //   phone_number: "0970047215",
  //   email: "testmanager@gmail.com",
  // });
  // testManager.save(function (err) {
  //   if (err) return handleError(err);
  // });

  // var testUser = new Schemas.User({
  //   username:"testUsername",
  //   password:"123456789",
  //   first_name: "user",
  //   middle_name: "m",
  //   last_name: "name",
  //   nickname: "nick",
  //   dob: new Date()
  // });

  // var testClass = new Schemas.ClassInfo({
  //   acad_year: "2019",
  //   class_level: "1",
  //   class_section: "12"
  // });

  // var testSubject = new Schemas.Subject({
  //   subject_name: "e-learning",
  //   subject_description: "best subject ever"
  // });
  
  // var testActivityType = new Schemas.ActivityType({
  //   activity_type_name: "testActivityType"
  // });

  //   testUser.save(function(err){
  //     if (err) return handleError(err);
  //   });

  //   testClass.save(function(err){
  //     if (err) return handleError(err);
  //   });

  //   testSubject.save(function(err){
  //     if (err) return handleError(err);
  //   });

  //   testActivityType.save(function(err){
  //     if (err) return handleError(err);
  //   });

  // var testActivity = new Schemas.Activity({
  //   activity_name: "testActivity",
  //   activity_type_id: testActivityType._id
  // });

  //   testActivity.save(function(err){
  //     if (err) return handleError(err);
  //   });

  // var testStudentInfo = new Schemas.StudentInfo({
  //   user_id: testUser._id,
  //   class_id: testClass._id,
  //   student_number: "100",
  //   score_log: [
  //     {activity_id: testActivity._id, timestamp:new Date(), score:100}
  //   ]
  // });

  //   testStudentInfo.save(function(err){
  //     if (err) return handleError(err);
  //   });

});