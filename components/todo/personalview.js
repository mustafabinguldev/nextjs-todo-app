import React from 'react'
import TodoList from './todolist';
import { TodoProvider } from '../contexts/todocontext';
import TodoAdder from './todoadder';

function PersonalView() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <TodoProvider>
              <TodoList />
              <TodoAdder/>
            </TodoProvider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalView