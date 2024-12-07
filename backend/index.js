const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const TodoModel = require('./Models/TodoModel');
const AuthRouter = require('./Routes/AuthRouter');

require('./Models/DB');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5001

app.listen(PORT , () => {
    console.log(`Server is Running ${PORT}`)
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth' , AuthRouter);

app.get('/get' , (req, res)=>{
    
    TodoModel.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    });
})

app.post('/add' , (req, res)=>{
    const input = req.body.input;

    TodoModel.create({input})
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    });
})

app.put('/update/:id' , (req , res) =>{
    const id = req.params.id;
    const {input , checked} = req.body;

    TodoModel.findByIdAndUpdate(id ,{input, checked},{new : true})
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    });
})

app.delete('/delete/:id' , (req, res) => {
    const {id} = req.params;

    TodoModel.findByIdAndDelete(id)
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    });
})



