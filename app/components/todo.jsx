"use client"    
import { addTodo } from '@/redux/action';
import React, { useRef, useState } from 'react';
import { BsPlus,BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import FilterButton from './filterButton';

export default function Todo() {
    const dispatch = useDispatch();
    const newTextRef = useRef();
    const searchRef = useRef();
    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }
    const handleAddToDoClick = () => {
        if(newTextRef.current.value.trim() !== ""){
            handleAddToDo(newTextRef.current.value);
            newTextRef.current.value = ""; // Clear the input field
        }
    }
    const handleSearchClick = () => {
        dispatch(updateSearchTerm(searchRef.current.value))
    }
    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>

            <div className='flex items-center mb-4'>
                <input useRef={newTextRef} type="text" name='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
                <button onClick={handleAddToDoClick} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'><BsPlus/></button>
            </div>
            <div className='flex items-center justify-between'>
                <FilterButton />
                <div className='flex items-center mb-4'>
                    <input useRef={searchRef} type="text" name='searchInput' placeholder='Search Here' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
                    <button onClick={handleSearchClick} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'><BsSearch/></button>
                </div>
            </div>
        </div>
    )
}
