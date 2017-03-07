import C from '../constants';

const addTodoAsync = (name) => ({
  type: C.ADD_TODO_ASYNC,
  name,
});

const addTodoSuccess = name => ({
  type: C.ADD_TODO_SUCCESS,
  name,
});

const addTodoError = error => ({
  type: C.ADD_TODO_ERROR,
  error,
});

export {
  addTodoSuccess,
  addTodoError,
  addTodoAsync,
};
