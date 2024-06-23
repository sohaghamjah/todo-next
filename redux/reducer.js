// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './type';

const initialState = { 
  todos: [], 
  filter: 'ALL', 
  searchTerm: '', 
  error: null, 
  loading: false, 
  message: null 
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
          return { ...state, loading: true, error: null };

      case ADD_TODO_SUCCESS:
          return {
              ...state,
              todos: [...state.todos, { ...action.payload.todo, id: state.todos.length }],
              loading: false,
              error: null,
              message: 'Todo added successfully!',
          };

      case ADD_TODO_FAILURE:
          return { ...state, loading: false, error: action.payload.error, message: null };

      case FETCH_TODOS_REQUEST:
          return { ...state, loading: true, error: null };

      case FETCH_TODOS_SUCCESS:
          return { ...state, todos: action.payload.todos, loading: false, error: null };

      case FETCH_TODOS_FAILURE:
          return { ...state, loading: false, error: action.payload.error };

      case TOGGLE_TODO:
          return {
              ...state,
              todos: state.todos.map((todo, index) =>
                  index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
              ),
          };

      case REMOVE_TODO:
          return {
              ...state,
              todos: state.todos.filter((todo, index) => index !== action.payload.id),
          };

      case MARK_COMPLETED:
          return {
              ...state,
              todos: state.todos.map((todo, index) =>
                  index === action.payload.id ? { ...todo, completed: true } : todo
              ),
          };

      case MARK_INCOMPLETE:
          return {
              ...state,
              todos: state.todos.map((todo, index) =>
                  index === action.payload.id ? { ...todo, completed: false } : todo
              ),
          };

      case FILTER_TODOS:
          return {
              ...state,
              filter: action.payload.filter,
          };

      case UPDATE_SEARCH_TERM:
          return {
              ...state,
              searchTerm: action.payload.searchTerm,
          };

      case MARK_ALL_COMPLETED:
          return {
              ...state,
              todos: state.todos.map((todo) => ({ ...todo, completed: true })),
          };

      default:
          return state;
  }
};

export default todoReducer;