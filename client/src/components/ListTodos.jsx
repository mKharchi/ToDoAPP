import React from 'react'
import Todo from './Todo'

const ListTodos = ({ todos }) => {
  return (
    <div className='w-full z-50 flex flex-col items-center'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default ListTodos