const express = require('express');
const todoController = require("../controllers/todo_controller");

const port = 3232;
const server = express();
server.use(express.json());

// اضافه کردن ایتم جدید به دیتابیس
server.post("/addtodo",todoController.addNewTodo);
// دریافت لیست تمام ایتم ها
server.get("/getall",todoController.getAllTodo);
// دریافت یک ایتم بر اساس ایدی
server.get("/getToDoById/:todo_id",todoController.getTodoById);
//اپدیت ایتم بر اساس ایدی
server.post("/updateTodo",todoController.updateTodoById)
// حذف ایتم بر اساس ایدی
server.post("/deleteById",todoController.deleteTodo)

server.listen(port,() =>{
    console.log("start listen in port : " + port);
});