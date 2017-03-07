import { takeEvery } from 'redux-saga/effects';
import C from '../constants';
import { addTodoAsync } from './worker_saga';

const watchCreateToDo = function* () {
  console.log('****** Redux saga create todo action listener');
  yield takeEvery(C.ADD_TODO_ASYNC, addTodoAsync);
};

export {
  watchCreateToDo,
}

