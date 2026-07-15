import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


export const hashPassword = async (password: string) => {
  const hashedpassword =  await bcrypt.hash(password, 12)
  return hashedpassword
}

export const verifypassword = async (newpassword:string, oldpassword:string) =>{
   const correctpassword =  await bcrypt.compare(newpassword, oldpassword)
   return correctpassword
}

export const generateToken = async (id:string): Promise<string> =>{
  const token = await jwt.sign({id}, process.env.JWT_SECRETKEY! , {expiresIn:"1d"} )
  return token
}