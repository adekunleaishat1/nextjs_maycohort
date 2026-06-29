import mongoose from "mongoose";

interface BookDocument {
    _id:mongoose.Types.ObjectId
    username:string
    email:string
    password:string
}

const userschema = new mongoose.Schema<BookDocument>({
    username:{type:String, required:true, trim:true},
    email:{type:String,unique:true, required:true, trim:true},
    password:{type:String, required:true},
},{timestamps:true})

export const usermodel = mongoose.models.users ||  mongoose.model<BookDocument>("users", userschema)