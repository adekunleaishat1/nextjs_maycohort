"use cilent"
import {z,} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client/react'
import gql from 'graphql-tag'
import { useRouter } from 'next/navigation'

const SIGNUP_QUERY = gql`
 mutation signupuser($input:userInput!){
  adduser(input: $input){
    username,
    email
  }
}
`


const Signupschema = z.object({
    username:z.string().min(3, "username cannot be less than 3 characters").trim(),
    email:z.email(),
    password:z.string().min(8,"password cannot be less than 8 characters").trim()
})

export type signupform =  z.infer<typeof Signupschema>


const Signupform = () => {
  const {register, handleSubmit,formState:{errors}} = useForm<signupform>({resolver: zodResolver(Signupschema)})
  console.log(errors);
  const router = useRouter()

  const  [createuser,{loading}] = useMutation(SIGNUP_QUERY)
  // console.log(mutation);
  

  const registeruser = async(values:signupform) =>{
   console.log(values);
    try {
        const response =  await createuser({variables: {input: values}})
        if (response) {
          console.log(response);
          router.push("/login")
        }

    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(registeruser)} className='w-[500px] mx-auto px-6' action="">
        <input  className="w-full rounded border px-3 py-2" {...register("username")} type="text" placeholder='Username'/>
       <small>{errors.username && errors.username.message}</small>
        <input className="w-full rounded border px-3 py-2" {...register("email")} type="text" placeholder='Email'/>
           <small>{errors.email && errors.email.message}</small>
        <input className="w-full rounded border px-3 py-2" {...register("password")} type="text" placeholder='Password'/>
           <small>{errors.password && errors.password.message}</small>
        <button type='submit'>{loading ? "Loading..." : "Register"}</button>
      </form>
    </div>
  )
}

export default Signupform