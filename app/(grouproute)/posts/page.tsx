
import React from 'react'
import Getpost from '.'
import Link from 'next/link'

const Posts = async() => {
    const allpost = await Getpost()
    console.log(allpost);
    
  return (
    <div>
        <h1>All posts</h1>
        {allpost.slice(0, 10).map((post)=>(
            <div key={post.id}>
               <Link href={`/posts/${post.id}`}>
                   <p>user : {post.id}</p>
                   <p>{post.title}</p>
               </Link>
            </div>
        ))}
    </div>
  )
}

export default Posts