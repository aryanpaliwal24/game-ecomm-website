const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    input: { type: String , required: true },
    checked: {type : Boolean , default: false}
})

const TodoModel = mongoose.model('Todo1', TodoSchema)
module.exports = TodoModel;