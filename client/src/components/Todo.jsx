import React, { useContext } from 'react';
import { Check } from 'lucide-react';
import EditTodo from './EditTodo';
import DeleteTodo from './deleteTodo';
import TodoContext from '../tools';

const Todo = ({ todo }) => {
  const { checkTodo } = useContext(TodoContext);
  
  const handleToggleComplete = () => {
    checkTodo(todo.todo_id);
  };

  return (
    <div className="w-full max-w-2xl border-b border-gray-200 py-4 px-2 transition-all text-white duration-200 group">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={handleToggleComplete}
          className={`
            relative flex items-center justify-center w-6 h-6 rounded-md border-2 transition-all duration-200
            ${todo.checked 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-400 bg-white'
            }
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
          `}
          aria-label={todo.checked ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.checked && <Check size={16} />}
        </button>

        {/* Todo Text */}
        <p 
          className={`
            flex-1 text-lg transition-all duration-200
            ${todo.checked 
              ? 'line-through text-gray-400' 
              : 'text-gray-200'
            }
          `}
        >
          {todo.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ">
          <EditTodo todo={todo} />
          <DeleteTodo id={todo.todo_id} />
        </div>
      </div>
    </div>
  );
};

export default Todo;