"use client"    
import {addTodoAsync } from '@/redux/action';
import React, { useRef, useState, useEffect  } from 'react';
import { BsPlus,BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import FilterButton from './filterButton';
import TodoList from './TodoList';

export default function Todo() {
    const dispatch = useDispatch();
    const newTextRef = useRef();
    const searchRef = useRef();
    const message = useSelector((state) => state.todo.message);
    const [showMessage, setShowMessage] = useState(false);

    const handleAddToDoClick = () => {
        const text = newTextRef.current.value.trim();
        if (text !== "") {
            dispatch(addTodoAsync(text));
            newTextRef.current.value = ""; // Clear the input field
            setShowMessage(true);
            setTimeout(() => setShowMessage(false),3000);
        }
    }

    useEffect(() => {
        if (message) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
            return () => clearTimeout(timer); // Clear timeout if component unmounts
        }
    }, [message]);

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
            {showMessage && message && (
                <div className='mb-4 p-2 bg-green-500 text-white rounded text-center'>
                    {message}
                </div>
            )}
            <div className='flex items-center mb-4'>
                <input ref={newTextRef} type="text" name='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
                <button onClick={handleAddToDoClick} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'><BsPlus/></button>
            </div>

            <TodoList />
        </div>
    )
}
