import React, { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const getTodos = async () => {
        const response = await fetch('http://localhost:5000/todos');
       
        return response.json();
    };
    const fetchTodos = async () => {
        const todoss = await getTodos()
        console.log(todoss);
        todoss.sort((a, b) => b.todo_id - a.todo_id);
        setTodos(todoss)
        setLoading(false)
    }
    useEffect(() => {

        fetchTodos()
        
    }, []);
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE',
            });
            fetchTodos();
        } catch (error) {
            alert('Error deleting todo');
        }
    };
    const updateTodo = async (id, newDescription) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newDescription }),
            });
            fetchTodos();
        } catch (error) {
            alert('Error updating todo');
        }
    };
    const createTodo = async (description) => {
        try {
            const response = await fetch('http://localhost:5000/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description }),
            })
            fetchTodos()
        } catch (error) {
            alert('Error adding todo')
        }
    }
    return (
        <TodoContext.Provider value={{
            todos,
            loading,
            fetchTodos,
            updateTodo, deleteTodo , createTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
