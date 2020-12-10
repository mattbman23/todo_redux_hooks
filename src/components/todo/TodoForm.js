import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToTodo, updateTodo } from '../../actions/todoActions';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const theChosenTodo = useSelector((state) => state.chosenTodo);

  useEffect(() => {
    if (theChosenTodo) {
      setTitle(theChosenTodo.title);
    } else {
      setTitle('');
    }
  }, [theChosenTodo]);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = () => {
    if (theChosenTodo) {
      dispatch(updateTodo(title));
      setTitle('');
    } else {
      dispatch(addToTodo(title));
      setTitle('');
    }
  };

  return (
    <div className="header" id="myDIV">
      <h2>Todo List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        value={title}
        onChange={changeHandler}
      />
      <div onClick={submitHandler} className="addBtn">
        {theChosenTodo ? 'Update' : 'Add'}
      </div>
    </div>
  );
};
