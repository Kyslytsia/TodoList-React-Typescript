import React from 'react';
import './App.css';
import {useState} from "react";
import {TodoInput} from './components/TodoInput'
import {TodoList} from './components/TodoList'

interface todo {
  text: string
  id: number
  completed: boolean
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: todo = {
      text: text,
      id: Date.now(),
      completed: false,
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const chengeCheckbox = (id: number) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        el.completed = !el.completed
      }

      return el
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(el => el.id !== id))
  }

  return  <div className="todo-conteiner">
    <TodoInput addTodo={addTodo}/>
    <TodoList todos={todos} toggle={chengeCheckbox} delete={deleteTodo}/>
  </div>
}

export default App;
