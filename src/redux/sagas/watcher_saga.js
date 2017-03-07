import { takeEvery } from 'redux-saga/effects';
import C from '../constants';
import { addToDoAsync } from './worker_saga';

export function* watchCreateToDo () {
  console.log('****** Redux saga create todo action listener');
  yield takeEvery(C.ADD_TODO_ASYNC, addToDoAsync);
}