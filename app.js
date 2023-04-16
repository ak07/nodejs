const express = require("express");
const app = express();
const connectDB = require("./DB/DBConnect");
const taskRouter = require("./Routes/TaskRoutes");
const pageNotFoundError = require("./Errors/PageNotFoundError");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/v1/tasks", taskRouter);

app.use(pageNotFoundError);


const initializeDBandServer = async () => {
    try{
        await connectDB(process.env.DB_URL);
        app.listen(PORT, ()=>{
            console.log("started listening on port: "+ PORT);
        });
    }catch{
        console.log("Error connecting to db");
    }
}

initializeDBandServer();


