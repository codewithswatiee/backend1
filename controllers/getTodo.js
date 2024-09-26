const Todo = require("../models/Todo");

exports.getTodo = async(req, res) => {
    try{
        //fetch all todos from db
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data: todos,
            message: "Entire Todo Data fetched"
        })
    }catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data: err.message,
            message: "Server Error"
        })
    }
}

exports.getTodoById = async(req, res) => {
    try{
        // extract by id
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});
        // data not found
        if(!todo){
            return res.status(400)
            .json({
                success:false,
                message: "No Data Found by given id"
            })
        }
        res.status(200)
        .json({
            success: true,
            data: todo,
            message: "Todo Data fetched"
        })
    } catch(err){
        console.error(err.message);
        res.status(500)
        .json({
            success:false,
            data: err.message,
            message: "Server Error"
        })
    }
}