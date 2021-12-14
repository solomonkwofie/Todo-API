//const { response, request } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// importing todocontroller
const todoController=require('/controllers/todoController');

app.get('/',(require,response)=> {
    response.send('Hello this is a get reponse');
});


app.post('/',(require,response)=>{
    response.send('hello this is a post respone');
});

app.post('/',(require,response)=>{
    response.send('hello this is a put respone');
});


app.get('/todos',(request,response)=>{
    response.send([{
        'title':'Plan the trip to Kumasi',
        'description':'I will be going to kumasi this weekend',
        'time':'Today',
        'iscompleted': false
    }]);
    
});

app.get('/users',(request,response)=>{
    response.send([{
        'username':'Solomon',
        'password':'password3',
        'iscompleted':false
    }])
})
app.listen(5010,() => {
    console.log("My server is up and running on port 5010");
    // connecting to the database
    mongoose.connect('mongodb+srv://solo:1234@cluster0.4iuve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log("DataBase not connected",error);
    });
});
