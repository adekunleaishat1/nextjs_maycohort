
import { books } from "./data";
import type { Book } from "./data";
import { bookmodel } from "../database/model/book";
import type { signupform } from "@/app/(auth)/signup";
import { usermodel } from "../database/model/user";
import { hashPassword, verifypassword } from "./auth";
import type { Login  , Blog} from "@/app/types/post";
import blogmodel from "../database/model/blog";
import { assert } from "console";


 export const resolvers = {
   Query:{
      book:async()=>{
       const allbook =   await bookmodel.find()
          return allbook
      },
      onebook: async(_:unknown,{id}:{id:string})=>{
        const onebook =   await bookmodel.findById(id)
         return onebook
      },
      getallblog:async(_:unknown,{id}:{id:string})=>{
        if(!id){
           throw new Error("Invalid Id")
        }
       const allblog =  await blogmodel.find({author:id})
       return allblog
      }

   },
   Mutation:{
    addBook:async(_:unknown,{input}:Book)=>{
       console.log(input);
      const  {title , author , year } = input
      if (!title || !author || !year) {
         throw new Error("All field are mandatory")
      }
     const newbook =  await bookmodel.create(input)
     if (newbook) {
       return newbook
     }
    },

    deleteBook:async(_:unknown, {id}:{id:string})=>{
     try {
       const deletedBook = await bookmodel.findByIdAndDelete(id)
      return deletedBook
      
     } catch (error) {
      if (error instanceof Error) {
         throw new Error(error.message)
      }
     }
    },
     adduser: async (_:unknown, {input}:{input:signupform })=>{
       try {
         const {username , email, password} = input
         console.log(input);  
         
         if (!username || !email || !password) {
           throw new Error("All field are mandatory") 
         }
         const hashedpassword =  await  hashPassword(password)
        const newUser =  await usermodel.create({
          ...input,
          password:hashedpassword
        })
          if (newUser) {
            return newUser
          }
       } catch (error) {
         if (error instanceof Error) {
             throw new Error(error.message) 
         }
        
       }
     },
     loginuser: async(_:unknown , {input}:{input:Login})=>{
       try {
         const {email, password} = input
         if (!email || !password) {
           throw new Error("All field are mandatory") 
         }
        const existuser = await usermodel.findOne({email})
          if (!existuser) {
             throw new Error("Invalid user") 
          }
         const correctpassword = await  verifypassword(password, existuser.password)
         if (!correctpassword) {
            throw new Error("Invalid user") 
         }
         return existuser
       } catch (error) {
         if (error instanceof Error) {
             throw new Error(error.message) 
         }
       }
     },
     addBlog:async(_:unknown,{input}:{input:Blog} )=>{
      try {
         const {title, content, author, category} = input
        if (!title || !content || !author || !category) {
           throw new Error("All field are mandatory") 
         }
       const newblog = await blogmodel.create(input)
       if (newblog) {
        return newblog
       }
      } catch (error) {
         if (error instanceof Error) {
             throw new Error(error.message) 
         }
      }
     }

   }

}
