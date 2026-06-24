import React from 'react'
import { Post } from '@/app/types/post'

const Getpost =  async () :Promise<Post[]>=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next: {revalidate: 60}
  })
 if (!res.ok) {
   throw new Error("invalid data")
 }
  return res.json()
}

export default Getpost