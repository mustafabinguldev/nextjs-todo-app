export const getAllTodos = () => {
   //You can connect any backend here.
   
   return [

   {id: 0, name: "Exercise", state: false, order: 2},       
   {id: 1, name: "Study Math", state: false, order: 1}, 
   {id: 1, name: "Study Spanish", state: false, order: 1}, 
   {id: 2, name: "Chess Practice", state: false, order: 3}]

}


export const setTaskState = (id, state) => {
   //You can change data with the backend.
}

export const deleteTask = (id) => {
   //You can change data with the backend.
}

export const addTask = (n) => {
   //You can change data with the backend.
}