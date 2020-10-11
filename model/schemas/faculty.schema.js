//** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

//** Schema Creation */
const facultySchema= new mongoose.Schema({
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
    nameD:{
        type: "String",
        required: true,
    }
    
});

//** Schema Exportation */
facultySchema.plugin(validator);
module.exports = facultySchema;