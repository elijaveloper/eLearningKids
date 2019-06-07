const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ClassInfoSchema = new Schema({
    acad_year: {
        type: Number,
        unique: true
    },
    class_level: {
        type: Number,
        unique: true
    },
    class_section: {
        type: Number,
        unique: true
    }
});

const ClassInfo = mongoose.model("classinfo", ClassInfoSchema);

module.exports = ClassInfo;
