"use client"
import { fetchTodos, toggleTodo,removeTodo } from '@/redux/action';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const loading = useSelector((state) => state.todo.loading);
    const error = useSelector((state) => state.todo.error);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    
    

  return (
    <div>
        <ul>
            <li className="my-2 text-sm italic">All Your Notes Here...</li>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {todos && todos.map((todo, index) => (
                    <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4' key={todo.id}>
                        <div className='flex items-center'>
                            <span className='mr-4 text-gray-500'>{index + 1}</span>
                            <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.title}</span>
                        </div>
                        <div className='space-x-3 ml-8'>
                            <button
                                className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
                                onClick={() => dispatch(toggleTodo(index))}
                                >
                                    {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
                            </button>
                            <button
                                className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
                                onClick={() => dispatch(removeTodo(index))}
                                >
                                <FaTrash />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </ul>
    </div>
  )
}
