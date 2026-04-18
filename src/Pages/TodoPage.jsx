import React, { useState, useEffect } from 'react';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // LocalStorage'dan verileri yükle
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Todos değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // CREATE - Yeni todo ekle
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // UPDATE - Todo güncelle
  const updateTodo = (text) => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, text: text } : todo
      )
    );
    setEditingTodo(null);
  };

  // DELETE - Todo sil
  const deleteTodo = (id) => {
    if (window.confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // Toggle - Tamamlandı durumunu değiştir
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Düzenleme modunu başlat
  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  // Düzenleme modunu iptal et
  const cancelEdit = () => {
    setEditingTodo(null);
  };

  const handleSubmit = (text) => {
    if (editingTodo) {
      updateTodo(text);
    } else {
      addTodo(text);
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
            📝 TODO Uygulaması
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Görevlerinizi yönetin - CRUD İşlemleri
          </p>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">
                Toplam Görev: <strong>{totalCount}</strong>
              </span>
              <span className="text-gray-700">
                Tamamlanan: <strong>{completedCount}</strong>
              </span>
              <span className="text-gray-700">
                Kalan: <strong>{totalCount - completedCount}</strong>
              </span>
            </div>
          </div>

          <TodoForm
            onSubmit={handleSubmit}
            editingTodo={editingTodo}
            onCancelEdit={cancelEdit}
          />

          <TodoList
            todos={todos}
            onEdit={startEdit}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
