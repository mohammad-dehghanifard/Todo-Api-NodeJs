const express = require('express');
const todoController = require("../controllers/todo_controller");

const port = 3232;
const server = express();
server.use(express.json())

server.post("/addtodo",todoController.addNewTodo)

server.get("/getall",todoController.getAllTodo)

server.listen(port,() =>{
    console.log("start listen in port : " + port);
});