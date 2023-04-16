const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'must provide a title'],
        trim: true,
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("Task", taskSchema);

