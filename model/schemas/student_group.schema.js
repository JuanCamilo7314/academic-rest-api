//** packages */
const mongoose = require("mongoose");

//** Schema Creation */
const studentGroupSchema= new mongoose.Schema({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        required: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        required: true
    },
});

//** Schema Exportation */
module.exports = studentGroupSchema;