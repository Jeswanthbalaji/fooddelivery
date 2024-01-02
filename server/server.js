// const express =require("express") //node.js

import  Express  from "express";
import  Cors from "cors";
import mongoose from "mongoose";
import route from "./routes/route.js";
import { config } from "dotenv";
import pizzasModel from "./Models/pizzaModel.js";
const server =Express();
config()
server.use(Express.json())
server.use(Cors())
server.use("/routes",route)

server.post("/",(req,res)=>{
  const users= pizzasModel.find({})
  console.log(users)
})
 
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    server.listen(4000,()=>{
    console.log("server is listening to port 4000")
})})
.catch((err)=>{
  console.log(err)
})




