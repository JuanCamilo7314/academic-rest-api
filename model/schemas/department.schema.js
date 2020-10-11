//** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

//** Schema Creation */
const departmentSchema= new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true,
        unique: true
    },
    nameDirector:{
        type: "String",
        required: true,
    },
    faculty_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        required: true
    }
    
});

//** Schema Exportation */
departmentSchema.plugin(validator);
module.exports = departmentSchema;