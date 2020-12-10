import React from 'react';
import { TodoForm } from '../components/todo/TodoForm';
import { TodoList } from '../components/todo/TodoList';

export const TodoScreen = () => {
  return (
    <div>
      <TodoForm />
      <br />
      <TodoList />
    </div>
  );
};
