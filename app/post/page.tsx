import Link from 'next/link'
import React from 'react'

export default function Post() {
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <div className='flex items-center justify-between'>
        <h2 className='mt-3 mb-6 text-2xl font-bold uppercase'>Post Feature</h2>
        <Link className='bg-blue-500 rounded px-5 py-2 text-white' href="/post/create">Create Post</Link>

        <div className='flex items-center mb-4'>
              
        </div>
      </div>
    </div>
  )
}
