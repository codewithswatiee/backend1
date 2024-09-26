const mongoose = require('mongoose');
require("dotenv").config(); 
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected sucessfully!"))
    .catch((err) => {
        console.log("Error connecting to database");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports = dbConnect;