const  Task = require("../Models/TaskModel");

const GetAllTasks = async (req,res)=>{
    let allTasks = await Task.find();
    if(allTasks.length > 0){
        res.status(200).json({"data":allTasks});
    }else{
        res.status(200).json({"message": "No tasks to show"})
    }
}

const GetTaskById = (req,res)=>{
    res.json(req.task);
}
const CreateTask = async (req,res)=>{
    try{
        let {title, description, completed} = req.body;
        let newTask = await Task.create({
            title, description, completed
        });
        res.status(201).json({"message": "Task created successfully","data": newTask });
    }catch(error){
        res.status(500).json({"message": error.message});
    }
}
const UpdateTask = async(req,res)=>{
    try {
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
    } catch (error) {
        return res.status(500).json({"message": error.message});
    }
}
const DeleteTask = async(req,res)=>{
    try {
        let taskToBeDeleted = req.task;
        let deletedInfo = await Task.deleteOne(taskToBeDeleted)
        res.status(200).json({"message":"Task deleted successfuly"});
    } catch (error) {
        res.status(500).json({"message": error.message});
    }
}


module.exports = {
    GetAllTasks,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask
}