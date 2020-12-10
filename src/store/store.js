import { TodoReducer } from '../reducers/todoReducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(TodoReducer, applyMiddleware(thunk));
