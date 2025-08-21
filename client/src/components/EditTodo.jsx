import React, { use, useContext, useState } from 'react'
import TodoContext from '../tools'
const EditingComponent = ({ todo  , handleSubmit , newDescription , setNewDescription }) => {
    

    return (
        <form onSubmit={handleSubmit} className='w-3xl p-6 gap-4 rounded-lg absolute top-1/3 backdrop-blur-2xl bg-[#225365]  flex flex-col justify-center items-center'>
            <input
                type='text'
                name='todo'
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className='border border-gray-400 focus:outline-none  p-4 rounded-lg min-w-2xl'
            />
            <button type='submit' className='bg-blue-600 border border-gray-400 text-white p-3 rounded-lg'>
                Save Changes
            </button>   
        </form>
    )
}

const EditTodo = ({ todo }) => {
    const {  updateTodo } = useContext(TodoContext)
    const [isUpdating, setIsUpdating] = useState(false)
    const [newDescription, setNewDescription] = useState(todo.description)
    const handleSubmit = async (e) => {

        e.preventDefault()
        await updateTodo(todo.todo_id, newDescription)
        setIsUpdating(false)
    }
    return (
        <>
            {isUpdating ? (
                <EditingComponent handleSubmit={handleSubmit} todo={todo} setNewDescription={setNewDescription} newDescription={newDescription} />
            ) : (
                <button onClick={() => setIsUpdating(true)} className='bg-yellow-500 text-white p-2 rounded-md'>EditTodo</button>
            )}
        </>
    )
}

export default EditTodo