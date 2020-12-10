import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_CHOSEN_TODO,
  UPDATE_TODO,
  CHECK_TODO,
} from '../constants/constants';

export const addToTodo = (title) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      title,
      id: uuidv4(),
      isDone: false,
    },
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const setChosenTodo = (todo) => (dispath) => {
  dispath({
    type: SET_CHOSEN_TODO,
    payload: todo,
  });
};

export const updateTodo = (title) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    payload: title,
  });
};

export const checkTodo = (id) => (dispatch) => {
  dispatch({
    type: CHECK_TODO,
    payload: id,
  });
};
