import React from 'react'
import TodoList from './todolist';
import { TodoProvider } from '../contexts/todocontext';
import TodoAdder from './todoadder';

function PersonalView() {
  return (
    <div className=''>
      <section class="bg-gray-50 dark:bg-gray-900">
        <TodoProvider>
        <br/>
        <div className='cursor-pointer'><a className='border rounded-lg p-5 mt-10 md:h-screen' href='https://github.com/BingulHan'>Github @BingulHan</a></div>
          <div className='flex'>
            <div class="flex flex-col items-center justify-center px-6 py-8 ml-auto md:h-screen lg:py-0">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <TodoList />
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center px-6 py-8 mr-auto md:h-screen lg:py-0">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <TodoAdder />
                </div>
              </div>
            </div>


          </div>

      
        </TodoProvider>

    
      </section>
    </div>
  )
}

export default PersonalView