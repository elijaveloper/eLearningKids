const mongoose = require("mongoose");
// Save a reference to the Schema constructor `mongoose.model`
let Schema = mongoose.Schema;

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
    time_limit: Number, // in milliseconds
    config_file: String
});

const ActivityType = mongoose.model("activitytype",ActivityTypeSchema);
const Activity = mongoose.model("activity",ActivitySchema);

module.exports = {
    ActivityType,
    Activity
}