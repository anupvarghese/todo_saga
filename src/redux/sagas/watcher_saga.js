import { takeLatest } from 'redux-saga/effects';
import C from '../constants';
import { addTodoAsync, removeTodoAsync } from './worker_saga';

const watchCreateToDo = function* () {
  yield takeLatest(C.ADD_TODO_ASYNC, addTodoAsync);
};

const watchRemoveTodo = function* () {
  yield takeLatest(C.REMOVE_TODO_ASYNC, removeTodoAsync);
}

export {
  watchCreateToDo,
  watchRemoveTodo,
};
