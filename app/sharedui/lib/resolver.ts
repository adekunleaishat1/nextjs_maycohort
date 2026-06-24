
import { books } from "./data";
import type { Book } from "./data";
import { bookmodel } from "../database/model/book";


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
    }
   }

}
