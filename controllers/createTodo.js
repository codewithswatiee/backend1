// import the model

const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async(req, res) => {
    try{
        // extract title and description from req body
        const {title, description} = req.body;
        // create a new Todo obj and insert in DB
        const response = await Todo.create({title, description});
        // send a json res with a sucess flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Todo created successfully",
        })
    } catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
}