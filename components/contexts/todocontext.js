"use client";

import { getAllTodos, setTaskState, addTask, deleteTask } from "@/services/todo/todoservice";
const { createContext, useState, useEffect } = require("react");

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getAllTodos());
  }, [])

  return (

    <TodoContext.Provider value={{

      tasks: tasks, 
      setTasks: setTasks, 
      changeState: (id,state) => {
        const newTasks = [...tasks];
        newTasks[id].state = state;
        setTasks(newTasks);

        //backend
        setTaskState(id, state);
      },

      addTask: (name) => {
        
         const newTasks = [... tasks, {id: tasks.length ,name: name, state: false}]
         setTasks(newTasks);
         addTask(name);
         
      },


      deleteTask: (id) => {
        const olderTasks = [... tasks]
        olderTasks[id] = null;
     
        let index = 0;
        
        const newTasks = [];
        olderTasks.map((m)=> {
          if (m != null){
            let element = {id: index, name: m.name, state: m.state} 
            newTasks.push(element);

            index = index + 1;
          }
        })

        setTasks(newTasks);
        deleteTask(id);
        
      }


    }}>
      {children}
    </TodoContext.Provider>

  );
}

export default TodoContext;