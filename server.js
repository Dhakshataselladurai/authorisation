const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskdb");

const Task=mongoose.model("Task",{

name:String

});

app.get("/tasks",async(req,res)=>{

const tasks=await Task.find();

res.json(tasks);

});

app.post("/tasks",async(req,res)=>{

await Task.create(req.body);

res.json({message:"Added"});

});

app.delete("/tasks/:id",async(req,res)=>{

await Task.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

});

app.listen(5000,()=>{

console.log("Server Running");

});
