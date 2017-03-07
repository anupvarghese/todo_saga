import C from '../constants';

const addTodoAsync = (name) => ({
  type: C.ADD_TODO_ASYNC,
  name,
});

const addTodo = name => ({
  type: C.ADD_TODO,
  name,
});

export {
  addTodo,
  addTodoAsync,
};
