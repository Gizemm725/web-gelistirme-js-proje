import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-3 hover:shadow-lg transition-shadow">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`ml-3 text-lg ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
