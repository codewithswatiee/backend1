const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(5000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.post('/api/cars', (req, res) => {
    const { name, year } = req.body;
    console.log(name, year);
    res.send('Data Submitted!');
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase') //promise
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(`Recieved ${error}`);
})