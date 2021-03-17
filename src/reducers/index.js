import { combineReducers } from 'redux';
import todosReducer from './todosReducer.js';
import textReducer from './textReducer.js';

export default combineReducers({
    todos: todosReducer,
    text: textReducer,
});