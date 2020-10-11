//** packages */
const mongoose = require("mongoose");

//** Schema Creation */
const courseSchema= new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
});

//** Schema Exportation */
module.exports = courseSchema;