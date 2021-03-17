import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const TodoApp = props => {
  return (
  <div className="container">
    <h1>Todo App</h1>
    <TodoForm />
    <TodoList />
  </div>
  );
}

export default TodoApp;