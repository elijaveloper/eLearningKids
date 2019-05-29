const mongoose = require("mongoose");
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

const ClassInfo = mongoose.model("classinfo", ClassInfoSchema);

module.exports = ClassInfo;
