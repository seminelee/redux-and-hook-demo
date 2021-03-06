import * as React from 'react'
import { useStore } from '../models/index'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [state] = useStore('Todo')
  return (
    <ul className='todo-list'>
      {state.todos.filter(todo => (
        state.filter === 'All' ||
        (state.filter === 'Active' && !todo.completed) ||
        (state.filter === 'Completed' && todo.completed)
      ))
      .map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList
