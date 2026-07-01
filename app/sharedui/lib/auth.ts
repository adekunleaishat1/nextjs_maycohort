import bcrypt from "bcryptjs";


export const hashPassword = async (password: string) => {
  const hashedpassword =  await bcrypt.hash(password, 12)
  return hashedpassword
}

export const verifypassword = async (newpassword:string, oldpassword:string) =>{
   const correctpassword =  await bcrypt.compare(newpassword, oldpassword)
   return correctpassword
}