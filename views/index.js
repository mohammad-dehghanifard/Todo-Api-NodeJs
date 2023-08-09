const express = require('express');
const todoController = require("../controllers/todo_controller");

const port = 3232;
const server = express();
server.use(express.json())

// اضافه کردن ایتم جدید به دیتابیس
server.post("/addtodo",todoController.addNewTodo)
// دریافت لیست تمام ایتم ها
server.get("/getall",todoController.getAllTodo)
server.get("/getToDoById/:todo_id",todoController.getTodoById)

server.listen(port,() =>{
    console.log("start listen in port : " + port);
});