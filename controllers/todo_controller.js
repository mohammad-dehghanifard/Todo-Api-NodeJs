const {Todo} = require("../models/todo_model")

async function getAllTodo(req,res){}

async function addNewTodo(){
    // گرفتن عنوان و توضیحات از کاربر
    const title = req.body.title;
    const content = req.body.content;

    // اعتبار سنجی دریافتی ها
    if(!title || !content){
          return res.status(400).json(
            {
                error : "Bad Request!"
            }
          )  
    }

    const todo = new Todo({
        title: title,
        content : content
    })

    const result = await todo.save();
    res.json(result);
}

async function getTodoById(req,res){}

async function updateTodoById(req,res){}

async function deleteTodo(req,res){}

module.exports = {
    getAllTodo,
    getTodoById,
    updateTodoById,
    deleteTodo,
}

