import React from 'react'

function Loading() {
  return (
    <div>
        <main className="max-w-3xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </main>
    </div>
  )
}

export default Loading