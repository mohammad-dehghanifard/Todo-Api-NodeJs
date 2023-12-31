const {Todo} = require("../models/todo_model")

async function getAllTodo(req,res){
    const result = await Todo.find();
    res.json(result);
}

async function addNewTodo(req, res) {

    // دریافت ازطلاعات از کاربر
    const title = req.body.title;
    const content = req.body.content

    // اعتبار سنجی داده ها
    if (!title || !content) {
        return res.status(400).json({
            error: "Bad Request! No data provided."
        });
    }

    // اضافه کردن دیتا به دیتابیس و نمایش به کاربر
    let data = new Todo({
        title: title,
        content: content
    });

    data = await data.save();
    res.json(data);
}


async function getTodoById(req,res){
    const id = req.params.todo_id;

    if(!id)
    {
        return res.status(400).json(
            {
                error : "Bad Request! Id NotFound!"
            }
        )
    }

    const result = await Todo.findById({_id:id});
    res.json(result);
}

async function updateTodoById(req,res){
    const id = req.body.id;

    if(!id)
    {
        return res.status(400).json(
            {
                error : "Bad Request! Id NotFound!"
            }
        )
    }

    const title = req.body.title;
    const content = req.body.content;
    const isDone = req.body.isDone;

    const todo = await Todo.findByIdAndUpdate(
        {_id : id},
        {
            $set : {
                title : title,
                content : content,
                isDone : isDone
            }
        },
        {
            new : true // => مقدار متغیر رو به ابجکت اپدیت شده تغییر میده
        }
    );

    res.json(todo);
}

async function deleteTodo(req,res){
    const id = req.body.id;

    if(!id)
    {
        return res.status(400).json(
            {
                error : "Bad Request! Id NotFound!"
            }
        )
    }

    const todo = await Todo.findByIdAndRemove({_id : id});
    res.send(todo);
}



module.exports = {
    getAllTodo,
    getTodoById,
    updateTodoById,
    deleteTodo,
    addNewTodo
}

