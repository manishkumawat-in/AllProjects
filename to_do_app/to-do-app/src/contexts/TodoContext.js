import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "be perfect in React JS",
            isCompleted: false,
        }
    ],
    addTodo: (msg) => { },
    updateTodo: (id, msg) => { },
    deleteTodo: (id) => { },
    toggleIsCompleted: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider