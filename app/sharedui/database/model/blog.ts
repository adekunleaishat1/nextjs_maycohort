import mongoose, { model } from "mongoose";


interface blogdocument {
    _id:mongoose.Types.ObjectId
    title:string
    content:string
     category:string,
     author:mongoose.Types.ObjectId
}

const blogschema = new mongoose.Schema<blogdocument>({
     title:{type:String, required:true, trim:true, unique:true},
     content:{type:String, required:true, trim:true},
     category:{type:String, required:true},
     author:{type:mongoose.Types.ObjectId, ref:"users"}
},{timestamps:true})


const blogmodel = mongoose.models.blogs || mongoose.model("blogs", blogschema)

export default blogmodel