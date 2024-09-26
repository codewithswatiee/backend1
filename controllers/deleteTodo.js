const Todo = require("../models/Todo");

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200)
        .json({
            success: true,
            data: todo,
            message: "Deleted sucessfully"
        })
    }catch(err){
        res.status(500)
        .json({
            success: false,
            message: "Server Issue"
        })
    }
}
