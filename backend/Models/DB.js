const mongoose = require('mongoose')

const mongo_url = "mongodb://localhost:27017/Todo";

mongoose.connect(mongo_url)
    .then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
});