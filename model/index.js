const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Edureka',{ useNewUrlParser: true } ,(error)=>{
    if(!error)
        console.log("Successed");
    else
        console.log("Error COnnection to database");
});

const Course = require("./course.model");
