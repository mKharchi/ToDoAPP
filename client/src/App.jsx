import React, { use, useContext } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import TodoContext from './tools'

const App = () => {
  const {todos} = useContext(TodoContext)


  return (
    <div className='min-h-screen flex flex-col justify-start items-center gap-14 bg-gradient-to-b from-[#1a1a1a] via-[#1d1d2c] to-[#1d1d2c] text-gray-100'>
      <InputTodo />
      <ListTodos todos={todos} />

      
    </div>
  )
}

export default App