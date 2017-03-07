import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addTodoSuccess, addTodoError } from '../actions/todo';

const addTodoAsync = function* (action) {
  try {
    const resp = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      name: action.name,
    })
    yield put(addTodoSuccess(resp.data.name));
  } catch (ex) {
    yield put(addTodoError(ex));
  }
};

export {
  addTodoAsync,
};

