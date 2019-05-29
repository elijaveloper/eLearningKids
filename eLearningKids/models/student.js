const mongoose = require("mongoose");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

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

const StudentInfo = mongoose.model("studentinfo",StudentInfoSchema);

module.exports = StudentInfo;
