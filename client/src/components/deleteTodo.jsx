import React, { use, useContext } from 'react'
import TodoContext from '../tools';
import { MdDelete } from "react-icons/md";

const DeleteTodo = ({id}) => {
  const {deleteTodo} = useContext(TodoContext)
  const handleDelete = async() => {
    // Logic to delete the todo with the given id
    await deleteTodo(id);
  }

  return (
    <button onClick={handleDelete} className='bg-transparent mx-2 text-white p-2 rounded-md'>
      <MdDelete />
    </button>

  )
}

export default DeleteTodo