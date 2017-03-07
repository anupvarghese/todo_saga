import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addTodo } from '../actions/todo';

const addTodoAsync = function* (action) {
  try {
    const resp = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      name: action.name,
    })
    console.log(resp.data);
    yield put(addTodo(resp.data.name));
  } catch (ex) {
    console.log('failed', ex);
  }
};

export {
  addTodoAsync,
};

