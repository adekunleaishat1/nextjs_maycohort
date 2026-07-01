
"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import type { Login } from '@/app/types/post'
import { useMutation } from '@apollo/client/react'
import gql from 'graphql-tag'

const LOGIN_QUERY = gql`
mutation loginuser($input:loginInput!){
  loginuser(input:$input){
    username,
    email
  }
}
`

const LoginForm = () => {
     const {register, handleSubmit,formState:{errors}} = useForm<Login>()
      const [loguser, {loading} ] = useMutation(LOGIN_QUERY)
     const loginuser = async (values:Login) =>{
        console.log(values);
       const response =  await loguser({variables:{input:values}})
       if (response) {
        
       }
     }
  return (
    <div>
    <form onSubmit={handleSubmit(loginuser)} className='w-[500px] mx-auto px-6' action="">
        <input className="w-full rounded border px-3 py-2" {...register("email")} type="text" placeholder='Username'/>
        <input className="w-full rounded border px-3 py-2" {...register("password")} type="text" placeholder='Username'/>
        <button type='submit'>{loading ? "Loading ..." : "Login"}</button>
      </form>
    </div>
  )
}

export default LoginForm