const express = require('express');
const todoController = require("../controllers/todo_controller");

const port = 3232;
const server = express();
const router = express.Router();

router.use(express.json());

router.post("/addtodo",todoController.addNewTodo)

server.listen(port,() =>{
    console.log("start listen in port : " + port);
});