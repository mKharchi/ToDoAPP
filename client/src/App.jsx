import React, { use, useContext } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import TodoContext from './tools'

const App = () => {
  const {todos} = useContext(TodoContext)


  return (
    <div className='min-h-screen overflow-hidden relative flex flex-col justify-start items-center gap-14 bg-gradient-to-b from-[#1a1a1a] via-[#1d1d2c] to-[#1d1d2c] text-gray-100'>
      <InputTodo />
      <ListTodos todos={todos} />

      <div className='absolute z-0 inset-x-0 bottom-10 h-70 w-40 -rotate-40 rounded-full bg-gray-700 blur-3xl' />

      <div className='absolute z-0 -right-20 top-10 h-80 w-65 -rotate-140 rounded-full bg-gray-700 blur-3xl' />
    </div>
  )
}

export default App