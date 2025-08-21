import React from 'react'
import EditTodo from './EditTodo'
import DeleteTodo from './deleteTodo'

const Todo = ({todo}) => {
  return (
    <div className='w-full max-w-2xl border-b py-4 flex items-center justify-center text-left text-lg font-semibold text-gray-300 '>
    <p className='w-full'>{todo.description}</p>
    <EditTodo todo={todo} />
    <DeleteTodo id={todo.todo_id} />
    </div>
  )
}

export default Todo