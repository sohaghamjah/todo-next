import { markAllCompleted } from '@/redux/action';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function FilterButton() {
    const dispatch = useDispatch();
    return (
        <div className="flex space-x-4 items-center">
        <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
        </select>

        <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
        >
        Mark All Completed
        </button>
    </div>
  )
}
