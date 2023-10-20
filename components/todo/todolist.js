"use client";
import React, { useContext } from 'react'
import TodoContext from '../contexts/todocontext';

function TodoList() {

  const { tasks, changeState, deleteTask } = useContext(TodoContext);

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

            {tasks.map((task) => {
              return (

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                    {task.name}

                  </th>
                  <td class="px-12 py-4">

                    {task.state ?
                      (<button onClick={(e) => changeState(task.id, false)}>Yes</button>) :
                      (<button onClick={(e) => changeState(task.id, true)}>No</button>)}

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