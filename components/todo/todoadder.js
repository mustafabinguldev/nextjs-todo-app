"use client";
import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/todocontext';

function TodoAdder() {

    const { addTask } = useContext(TodoContext);
    const [name, setName] = useState("Task Name");
    const [order, setOrder] = useState(3);

    return (

        <form>
            <h3 class="text-4xl mt-5 mb-5 text-center m-2 font-bold">Add Task</h3>

            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">


                <select id='order' onChange={(e) => { setOrder(e.target.value) }} class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={1}>Important</option>
                    <option value={2}>Need</option>
                    <option value={3}>Normal</option>
                </select>

                <input onChange={(e) => setName(e.target.value)} type="search" id="search" class="mt-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="Task Name" required />
                <button onClick={(e) => {
                    addTask(name, order);
                }} type="button" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

            </div>
        </form>

    )
}

export default TodoAdder