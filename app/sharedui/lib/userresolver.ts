import type { signupform } from "@/app/(auth)/signup";
import { usermodel } from "../database/model/user";
import { hashPassword, verifypassword , generateToken} from "./auth";
import type { Login  , Blog} from "@/app/types/post";

export const userresolver = {
    Mutation:{
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
         const token =  await generateToken(existuser._id)
         return{ existuser, token}
       } catch (error) {
         if (error instanceof Error) {
             throw new Error(error.message) 
         }
       }
     },
    }
}