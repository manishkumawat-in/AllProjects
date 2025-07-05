import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState()
    const { addTodo } = useTodo()

    const addNewTodo = () => {
        if (!todoMsg) return
        addTodo({ id: Date.now(), todo: todoMsg, isComplted: false })
    }
    return (
        <>
            <form onSubmit={addNewTodo} className="bg-[#fefae0] rounded-xl ">
                <input
                    type="text"
                    className="w-lg p-3 outline-none"
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-[#e9edc9] p-3 px-4 rounded-r-lg cursor-pointer"

                >add</button>
            </form>
        </>
    )
}

export default TodoForm