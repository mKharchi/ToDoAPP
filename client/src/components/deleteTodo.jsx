import React, { use, useContext } from 'react'
import TodoContext from '../tools';

const DeleteTodo = ({id}) => {
  const {deleteTodo} = useContext(TodoContext)
  const handleDelete = async() => {
    // Logic to delete the todo with the given id
    await deleteTodo(id);
  }

  return (
    <button onClick={handleDelete} className='bg-red-600 mx-2 text-white p-2 rounded-md'>DeleteTodo</button>

  )
}

export default DeleteTodo