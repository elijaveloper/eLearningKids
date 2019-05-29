const mongoose = require("mongoose");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    subject_name: {
        type: String
    },
    subject_description: {
        type: String
    }
});

const Subject = mongoose.model("subject",SubjectSchema);

module.exports = Subject;