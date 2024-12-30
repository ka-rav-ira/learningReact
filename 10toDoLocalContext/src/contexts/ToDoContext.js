import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo:"Todo Msg",
            completed:false,
        }
    ],
    addToDo: (todo)=>{},
    updatedToDo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}

})

 const useToDo = () => {
    return useContext(ToDoContext)
}

export default useToDo;

export const ToDoProvider = ToDoContext.Provider; 