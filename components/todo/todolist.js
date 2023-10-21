"use client";
import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/todocontext';

function TodoList() {

  const { tasks, filteredTasks, changeState, deleteTask } = useContext(TodoContext);

  const [selection, setSelection] = useState("");

  return (
    <div>

      <h3 class="text-4xl	 text-center m-2 font-bold">All Tasks</h3>
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

            {filteredTasks(selection, tasks).map((task) => {
              return (

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.name}
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

        <div class="ml-20 mt-5 inline-flex rounded-md shadow-sm" role="group">
          <button onClick={(e)=> {
            setSelection("finish")
          }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 "+(selection=="finish" ? ("dark:text-sky-400") : ("dark:text-white")) +" dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
            Finish
          </button>
          <button onClick={(e) => {
            setSelection("continues")
          }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 "+(selection=="continues" ? ("dark:text-sky-400") : ("dark:text-white")) +" dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
            Continues
          </button>
          <button onClick={(e)=>{
            setSelection("")
          }} type="button" class={"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 "+(selection=="" ? ("dark:text-sky-400") : ("dark:text-white")) +" dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"}>
            All
          </button>
        </div>
      </div>






    </div>
  )
}

export default TodoList