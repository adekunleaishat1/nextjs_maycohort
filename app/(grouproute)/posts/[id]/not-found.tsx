import React from 'react'
import Link from 'next/link'

const Notfound = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-gray-600 mt-2">
        The post you are looking for does not exist.
        </p>
        <Link href="/posts" className="text-blue-600 hover:underline mt-4 inline-block">
        Back to all posts
        </Link>
   </main>
  )
}

export default Notfound