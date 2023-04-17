const AsyncTryCatchMiddleware = require("../Middleware/AsyncTryCatchMiddleware");
const  Task = require("../Models/TaskModel");

const GetAllTasks = AsyncTryCatchMiddleware(async (req,res)=>{
    let allTasks = await Task.find();
    if(allTasks.length > 0){
        res.status(200).json({"data":allTasks});
    }else{
        res.status(200).json({"message": "No tasks to show"})
    }
});

const GetTaskById = (req,res)=>{
    return res.status(200).json(req.task);
}


const CreateTask = AsyncTryCatchMiddleware(async(req,res)=>{
    let {title, description, completed} = req.body;
    let newTask = await Task.create({
        title, description, completed
    });
    return res.status(201).json({"message": "Task created successfully","data": newTask });
});


const UpdateTask = AsyncTryCatchMiddleware(async(req,res)=>{
    
    let {title, description, completed} = req.body;
    let taskToBeUpdated = req.task;
    if(title){
        taskToBeUpdated.title = title;
    }
    if(description){
        taskToBeUpdated.description = description;
    }
    if(completed){
        taskToBeUpdated.completed = completed
    }
    let updatedTask = await taskToBeUpdated.save();
    return res.status(200).json({"message": "Task updated successfully","data": updatedTask });
    
});

const DeleteTask = AsyncTryCatchMiddleware(async(req,res)=>{
    let taskToBeDeleted = req.task;
    let deletedInfo = await Task.deleteOne(taskToBeDeleted)
    res.status(200).json({"message":"Task deleted successfuly"});
});


module.exports = {
    GetAllTasks,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask
}