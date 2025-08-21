import React, { useContext } from 'react'
import { useState } from 'react'
import TodoContext from '../tools'

const InputTodo = () => {
  const [todo, setTodo] = useState('')
  const {createTodo} = useContext(TodoContext)
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createTodo(todo)
      setTodo('')
    } catch (error) {
      alert('Error adding todo')
    }
  }

  return (
    <div className='w-full z-40 flex px-4 flex-col gap-8 items-center'>
      <h1 className='w-full text-center text-lg sm:text-2xl mt-24 '>Todo List</h1>
      <form onSubmit={handleSubmit} className='w-full flex lg:flex-row flex-col items-center gap-4 lg:gap-0 justify-center'>
        <input
          type='text'
          name='todo'
          value={todo}
          onChange={handleChange}
          className='border border-gray-400 focus:outline-none  p-4 rounded-md lg:rounded-l-lg w-full lg:max-w-2xl '
        />
        <button disabled={!todo} type='submit' className='bg-pink-950 border  text-xl  border-gray-400 text-white p-3 lg:rounded-r-lg'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default InputTodo