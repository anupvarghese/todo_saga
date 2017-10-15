import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  addTodoSuccess,
  addTodoError,
  todoRequest,
  removeTodoSuccess,
  removeTodoError,
} from '../actions/todo';

const addTodoAsync = function* (action) {
  try {
    yield put(todoRequest())
    const resp = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      name: action.name,
    })
    yield put(addTodoSuccess({
      id: resp.data.id,
      name: resp.data.name,
    }));
  } catch (ex) {
    yield put(addTodoError(ex));
  }
};

const removeTodoAsync = function* (action) {
  try {
    yield put(todoRequest())
    yield call(axios.delete, 'https://jsonplaceholder.typicode.com/todos/1');
    yield put(removeTodoSuccess(action.id));
  } catch (ex) {
    yield put(removeTodoError(ex));
  }
};

export {
  addTodoAsync,
  removeTodoAsync
};
