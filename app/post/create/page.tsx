"use client"
import React from 'react'
import Link from 'next/link';
import { UseDispatch, useDispatch } from 'react-redux';
import { changeInputValue } from '@/redux/action/post-action';

export default function PostCreate() {
    const dispatch = useDispatch();
    const handInputChnage = (name: string, value: any) => {
        dispatch(changeInputValue(name, value));
    };
    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <div className='flex items-center justify-between'>
                <h2 className='mt-3 mb-6 text-2xl font-bold uppercase'>Post Feature</h2>
                <Link className='bg-blue-500 rounded px-5 py-2 text-white' href="/post">All Post</Link>
            </div>
            <form className="mx-auto p-4 rounded-md">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                    id="title"
                    name='title'
                    value
                    onChange={(e => handInputChnage('title', e.target.value))}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                    <textarea
                    id="body"
                    name='body'
                    onChange={(e => handInputChnage('body', e.target.value))}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">
                    Submit
                </button>
            </form>
        </div>
    )
}
