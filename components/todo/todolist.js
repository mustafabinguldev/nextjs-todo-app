"use client";
import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/todocontext';

function TodoList() {

  const { tasks, filteredTasks, changeState, deleteTask } = useContext(TodoContext);

  const [selection, setSelection] = useState("");
  const [filteredText, setFilteredText] = useState("");

  return (
    <div>

      <h3 class="text-4xl	 text-center m-2 font-bold">All Tasks</h3>

      <div class="ml-20 mt-5 inline-flex rounded-md shadow-sm" role="group">
        <button onClick={(e) => {
          setSelection("finish")
        }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 " + (selection == "finish" ? ("dark:text-sky-400") : ("dark:text-white")) + " dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
          Finish
        </button>
        <button onClick={(e) => {
          setSelection("continues")
        }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 " + (selection == "continues" ? ("dark:text-sky-400") : ("dark:text-white")) + " dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
          Continues
        </button>
        <button onClick={(e) => {
          setSelection("")
        }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 " + (selection == "" ? ("dark:text-sky-400") : ("dark:text-white")) + " dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
          All
        </button>


      </div>
      <form class="mt-6 mb-6">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>

          <input onChange={(e) => setFilteredText(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Task" required></input>

        </div>
      </form>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
            <tr>
              <th scope="col" class="px-6 py-3">
                Task Name
              </th>
              <th scope="col" class="px-6 py-3">
                Task State
              </th>

              <th scope="col" class="px-6 py-3">
                Delete?
              </th>
            </tr>
          </thead>
          <tbody>

            {filteredTasks(selection, tasks, filteredText).map((task) => {
              return (

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                    {task.state ?
                      (<strike>{task.name}</strike>) :
                      (task.name)
                    }

                  </th>
                  <td class="px-12 py-4">
                    {task.state ?
                      (<button onClick={(e) => changeState(task.id, false)}>Yes</button>) :
                      (<button onClick={(e) => changeState(task.id, true)}>No</button>)
                    }
                  </td>

                  <td class="px-12 py-4">
                    <button onClick={(e) => deleteTask(task.id)}>X</button>
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>

      </div>






    </div>
  )
}

export default TodoList