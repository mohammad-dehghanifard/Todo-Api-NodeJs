const mongoose = require('mongoose');

// اتصال به دیتابیس
mongoose.connect("mongodb://127.0.0.1:27017/todoDb")
.then(console.log("connecte to db...."))
.catch(err => console.error(err.message));

const todoSchema = new mongoose.Schema({
         // trim : فضای خالی اول و اخر رو جذف میکنه
         title : {type : String, required : true, trim : true},
        // trim : فضای خالی اول و اخر رو جذف میکنه
        content : {type : String, required : true, trim : true},
        isDone : {type : Boolean, default : false, }});

const Todo = mongoose.model("Todo",todoSchema);        

module.exports = {Todo};