import mongoose  from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    varients:[],
    prices:[],
    category:{
        type:String,
        require:true,
        unique:true
    },
    image:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true,
        unique:true
    }
    
   
})

const pizzasModel = mongoose.model("pizzas",schema)

export default pizzasModel ;