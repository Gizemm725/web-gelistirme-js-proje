import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSubmit, editingTodo, onCancelEdit }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yeni görev ekle..."
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          {editingTodo ? 'Güncelle' : 'Ekle'}
        </button>
        {editingTodo && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
          >
            İptal
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
