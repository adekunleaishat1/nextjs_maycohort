import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI 


export const connect = async  () =>{
    try {
      const connection =  await mongoose.connect(MONGODB_URI!)
      if (connection) {
        console.log("database connected");
        
      }
    } catch (error) {
        console.log(error);
        
    }
}