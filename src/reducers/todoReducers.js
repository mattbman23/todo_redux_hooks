import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  SET_CHOSEN_TODO,
  UPDATE_TODO,
} from '../constants/constants';

const initState = {
  todos: JSON.parse(localStorage.getItem('todoList')) || [],
  chosenTodo: null,
};

export const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      localStorage.setItem(
        'todoList',
        JSON.stringify([...state.todos, action.payload])
      );
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      let newTodos = state.todos.filter((x) => x.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case SET_CHOSEN_TODO:
      return { ...state, chosenTodo: action.payload };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === state.chosenTodo.id) {
            todo.title = action.payload;
          }
          return todo;
        }),
        chosenTodo: null,
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.isDone = !todo.isDone;
          }

          return todo;
        }),
      };

    default:
      return state;
  }
};
