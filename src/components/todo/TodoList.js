import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
  checkTodo,
  deleteTodo,
  setChosenTodo,
} from '../../actions/todoActions';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const editHandler = (todo) => {
    dispatch(setChosenTodo(todo));
  };

  const checkHandler = (id) => {
    dispatch(checkTodo(id));
  };

  return todos.length ? (
    <div id="myUL">
      {todos.map((todo) => (
        <motion.li
          key={todo.id}
          animate={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 0.95 }}
          initial={{ scale: 0.9 }}
        >
          <div className="todoBody">
            <div
              style={todo.isDone ? { textDecoration: 'line-through' } : {}}
              className="leftTodo"
            >
              {todo.title}
            </div>
            <div className="rightTodo">
              <div
                onClick={() => editHandler(todo)}
                className="btn btn-info float-left"
              >
                Edit
              </div>
              <div
                onClick={() => checkHandler(todo.id)}
                className="btn btn-primary float-left"
              >
                Check
              </div>
              <div
                onClick={() => deleteHandler(todo.id)}
                className="btn btn-danger float-left"
              >
                Delete
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </div>
  ) : (
    <div>
      <h2 style={{ textAlign: 'center' }}>List is empty</h2>
    </div>
  );
};
