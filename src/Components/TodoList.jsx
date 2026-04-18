import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 text-xl">
        Henüz görev yok. Yukarıdan yeni görev ekleyin!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
