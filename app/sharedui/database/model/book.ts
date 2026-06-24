import mongoose, { models } from "mongoose";

interface BookDocument {
    _id:mongoose.Types.ObjectId
    title:string
    author:string
    year:number
}

const bookschema = new mongoose.Schema<BookDocument>({
    title:{type:String, required:true, trim:true},
    author:{type:String, required:true, trim:true},
    year:{type:Number, required:true},
},{timestamps:true})

export const bookmodel = mongoose.models.books ||  mongoose.model<BookDocument>("books", bookschema)