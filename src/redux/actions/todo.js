import C from '../constants';

const addTodoAsync = (name) => ({
  type: C.ADD_TODO_ASYNC,
  name,
});

const removeTodoAsync = (id) => ({
  type: C.REMOVE_TODO_ASYNC,
  id,
});

const addTodoSuccess = data => ({
  type: C.ADD_TODO_SUCCESS,
  data,
});

const addTodoError = error => ({
  type: C.ADD_TODO_ERROR,
  error,
});

const todoRequest = error => ({
  type: C.TODO_REQUEST,
});

const removeTodoSuccess = name => ({
  type: C.REMOVE_TODO_SUCCESS,
  name,
});

const removeTodoError = (error) => ({
  type: C.REMOVE_TODO_ERROR,
  error,
})

export {
  addTodoSuccess,
  addTodoError,
  addTodoAsync,
  removeTodoAsync,
  todoRequest,
  removeTodoSuccess,
  removeTodoError,
};
