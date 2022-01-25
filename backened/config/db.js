const dotenv = require('dotenv');
require('dotenv').config({ path: "../../.env" });
const mongoose=require("mongoose")
MONGO_URI="mongodb+srv://tamanna-117:dev@cluster0.gfhi8.mongodb.net/Laundry?retryWrites=true&w=majority"
// console.log("env port",process.env.PORT)
// console.log("env mongo url",process.env.MONGO_URI)

const connectdB=async()=>{
    try{
        mongoose.connect(MONGO_URI,{
            
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        // console.log(process.env.PORT)
        console.log("Mongo db connection sucesss")
        
    }catch(error){
        
        console.log(error);
        process.exit(1)
        
    }
}
//connectdB()
module.exports=connectdB;