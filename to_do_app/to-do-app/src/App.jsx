import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from "./componets/TodoForm"
import TodoItems from './componets/TodoItems'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {

  const [todos, setTodos] = useState([])
  const addTodo = (msg) => {
    setTodos((prev) => [{ ...msg }, ...prev])
  }
  const updateTodo = (id, msg) => {
    setTodos((prev) => prev.map((PrevTodo) => PrevTodo.id === id ? { ...PrevTodo, todo: msg } : PrevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((PrevTodo) => PrevTodo.id !== id))
  }
  const toggleIsCompleted = (id) => {
    setTodos((prev) => prev.map((PrevTodo) => PrevTodo.id === id ? { ...PrevTodo, isCompleted: !PrevTodo.isCompleted } : PrevTodo))
  }

  useEffect(() => {
    const todoItems = JSON.parse(localStorage.getItem("todos"))
    if (todoItems.length > 0) {
      setTodos(todoItems)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleIsCompleted }}>
      <div>
        <TodoForm />
      </div>
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <TodoItems todo={todo} />
            </div>
          ))
        }

      </div>
    </TodoContextProvider>

  )
}

export default App
