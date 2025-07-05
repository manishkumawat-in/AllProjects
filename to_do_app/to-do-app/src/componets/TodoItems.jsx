import { useState } from "react";
import { useTodo } from "../contexts/TodoContext"

function TodoItems({todo}) {

const [todoMsg, setTodoMsg] = useState(todo.todo)
const [isEditable, setIsEditable] = useState(false)
const {deleteTodo, updateTodo, toggleIsCompleted} = useTodo()

const editTodo = ()=> {
    if(isEditable) {
        updateTodo(todo.id, todoMsg)
        setIsEditable(false)
    } else {
        setIsEditable(true)
    }
}

    return (
        <div className={`text-gray-700 text-xl rounded-sm mt-5 line-through ${todo.isCompleted ? "bg-[#b3dcb8]" : "no-underline bg-[#faedcd]"}`}>
            <input 
                type="checkbox"
                checked={todo.isCompleted} 
                onChange={()=> {
                    toggleIsCompleted(todo.id)
                }}
            />
            <input 
                type="text"
                className="px-4 w-sm outline-none "
                value={todoMsg} 
                readOnly={!isEditable}
                onChange={(e)=> setTodoMsg(e.target.value)}
            />
            <button
                type="button"
                className="p-2"
                onClick={editTodo}
            >{isEditable ? "✅" : "📝"}</button>
            <button 
                type="button"
                className="p-2 cursor-pointer"
                onClick={()=> deleteTodo(todo.id)}
            >⨉</button>
                
        </div>
    )
}

export default TodoItems