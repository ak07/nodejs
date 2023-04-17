const Task = require("../Models/TaskModel");


const getTask = async (req, res, next, id) => {
    try{
        let task = await Task.find({_id:id});
        if(task == null || task.length == 0){
           return res.status(404).json({"message": "Cannot find task with the id "+id});
        }
        req.task = task[0];
        next()
    }catch(err){
        console.log("Printing errror from middleware");
        console.log(err)
        next(err);
    }
}

module.exports = {
    getTask
}