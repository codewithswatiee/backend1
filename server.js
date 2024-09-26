const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require('./routes/todos');

// mount the todo APIs routes

app.use('/api/v1', todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// connect to the db
const dbConnect = require("./config/database");
dbConnect();

// default ROute
app.get("/", (req, res) => {
    res.send("Welcome to the TODO API");
})