import React from 'react'
import { notFound } from 'next/navigation'
import { Post } from '@/app/types/post'

type Propstype = {
  params: Promise<{id: string}>
}
const getonepost = async(id:string): Promise<Post | null> =>{
   const res = await fetch(`https:///jsonplaceholder.typicode.com/posts/${id}`,{
    next: {revalidate: 60}
  })
 if (res.status == 404) {
  return null
 }
  return res.json()
}

const Onepost = async (param:Propstype) => {
    const {id} = await param.params
   const onepost = await getonepost(id)
    console.log(id);
    console.log(onepost);
    if (!onepost) {
       notFound() 
    }
    
  return (
    <div>Onepost</div>
  )
}

export default Onepost
