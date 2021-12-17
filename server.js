//const { response, request } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 1500;
const mongoose = require('mongoose');
const todoModel = require('./models/todoModel');
// importing todocontroller
const todoController=require('./controllers/todoController');
const { add } = require('nodemon/lib/rules');
const { request, response } = require('express');

app.use(express.json()),

app.get("/",(request,response) =>{
 response.status(200).json({message:"Hello Welcome to my todo API"})   
});


app.post('/todo',todoController.addTodo);
app.get ('/todo',todoController.getALLTodo);
app.patch ('/todo/:todoId',todoController.updateById);
app.delete ('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);


// listening to request on localhost post 5010
app.listen(PORT,() => {
    console.log("My server is up and running ",PORT);
    // connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log("DataBase not connected",error);
    });
});
