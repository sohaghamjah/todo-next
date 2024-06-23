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
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST
} from "./type";
import axios from "axios";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: { todo },
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: { error },
});
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
  });
  
  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
  });
  
  export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });
  
  export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
  });
  
  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
  });
  
  export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });

  // Fetch Todos

  const fetchTodosRequest = () => ({
      type: FETCH_TODOS_REQUEST,
  });

  const fetchTodosSuccess = (todos) => ({
      type: FETCH_TODOS_SUCCESS,
      payload: { todos },
  });

  const fetchTodosFailure = (error) => ({
      type: FETCH_TODOS_FAILURE,
      payload: { error },
  });

  export const fetchTodos = () => {
      return async (dispatch) => {
          dispatch(fetchTodosRequest());
          try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
              dispatch(fetchTodosSuccess(response.data));
          } catch (error) {
              dispatch(fetchTodosFailure(error.message));
          }
      };
  };

  export const addTodoAsync = (text) => {
    return async (dispatch) => {
        dispatch(addTodo(text));
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: text,
                completed: false,
            });
            dispatch(addTodoSuccess(response.data));
        } catch (error) {
            dispatch(addTodoFailure(error.message));
        }
    };
};