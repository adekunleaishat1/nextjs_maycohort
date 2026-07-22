"use client"

import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client/react'
import type { TypedDocumentNode } from '@apollo/client'
import gql from 'graphql-tag'

type Blogitem = {
  id: string
  title: string
  content: string
  category: string
}

export const GET_ALL_BLOG: TypedDocumentNode<
  { getallblog: Blogitem[] },
  { id: string | null; page: number; limit: number }
> = gql`
query allblog($id:ID!,$page:Int!, $limit:Int!){
  getallblog(id:$id,page:$page,limit: $limit){
    id
    title
    content
    category
  }
}
`

const PAGE_SIZE = 4

const Blogdisplay = () => {
  const [authorid, setAuthorid] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const stored = localStorage.getItem("existuser")
    if (stored) {
      const user = JSON.parse(stored)
      setAuthorid(user?.id)
    }
  }, [])

  const { data, loading, error } = useQuery(GET_ALL_BLOG, {
    variables: { id: authorid, page, limit: PAGE_SIZE },
    skip: !authorid,
  })

  if (!authorid) return <p className="text-center text-gray-500 mt-8">Login to see your blogs</p>
  if (loading) return <p className="text-center text-gray-500 mt-8">Loading blogs...</p>
  if (error) return <p className="text-center text-red-500 mt-8">{error.message}</p>

  const allblog = data?.getallblog ?? []
  // the server sends one page at a time — a page smaller than the limit means it is the last one
  const islastpage = allblog.length < PAGE_SIZE

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">My Blogs</h2>

      {allblog.length === 0 && page === 1 && (
        <p className="text-gray-500">No blogs yet. Add your first one above!</p>
      )}
      {allblog.length === 0 && page > 1 && (
        <p className="text-gray-500">No more blogs.</p>
      )}

      {allblog.map((blog) => (
        <div key={blog.id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-1">{blog.category}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{blog.content}</p>
        </div>
      ))}

      {(allblog.length > 0 || page > 1) && (
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">Page {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={islastpage}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Blogdisplay
