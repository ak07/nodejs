const Task = require("../Models/TaskModel");


const getUser = async (req, res, next, id) => {
    console.log("printing from middleware "+ id);
    try{
        let task = await Task.find({_id:id});
        if(task == null || task.length == 0){
           return res.status(404).json({"message": "Cannot find task with the id "+id});
        }
        req.task = task[0];
        next()
    }catch(err){
        next(err);
    }
}

module.exports = {
    getUser
}