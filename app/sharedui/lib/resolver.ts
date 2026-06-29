
import { books } from "./data";
import type { Book } from "./data";
import { bookmodel } from "../database/model/book";
import type { signupform } from "@/app/(auth)/signup";
import { usermodel } from "../database/model/user";


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
     adduser: async (_:unknown, input:signupform )=>{
       try {
         const {username , email, password} = input
         if (!username || !email || !password) {
           throw new Error("All field are mandatory") 
         }
       const newUser =  await usermodel.create(input)
          if (newUser) {
            return newUser
          }
       } catch (error) {
         if (error instanceof Error) {
             throw new Error(error.message) 
         }
        
       }
     }
   }

}
