import C from '../constants';

const addTodo = (name) => ({
  type: C.ADD_TODO_ASYNC,
  name,
});

export {
  addTodo,
};
