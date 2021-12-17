const { response } = require('express');
const todoModel = require('../models/todoModel')
 async function addTodo(request,response){
  try {
const newTodo= await todoModel.create(request.body); 
response.status(200).json(newTodo)
} catch (error) {
  console.log("Something went wront",error.meggage);
    
}

}


 async function getALLTodo(request,response){
 try {
   const newTodo= await todoModel.find(); 
   response.status(200).json(newTodo)
   
 } catch (error) {
  console.log("Something went wront",error.meggage);
   
 }  
    
}
 async function getTodoById(request,response){
  try {
    const get1todo = await todoModel.findById(request.params.todoId);
    response.status(200).json(get1todo);

  } catch (error) {
    console.log("Something went wront",error.meggage);
    
  }
 
  
}


 async function updateById(request,response){
  try {
    const updateId = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
    response.status(200).json(updateId);
    
  } catch (error) {
    console.log("Something went wrong",error.message); 
  }
    
    
}
  async function deleteById(request,response){
  try {
     await todoModel.findByIdAndDelete(request.params.todoId); 
    response.status(200).json({message:"todo deleted"});

  } catch (error) {
    console.log("Something went wrong",error.message);
    
  }
    
    
}
module.exports={
    addTodo,
    getALLTodo,
    deleteById,
    updateById,
    getTodoById
}

