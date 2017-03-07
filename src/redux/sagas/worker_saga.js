import { call, put } from 'redux-saga/effects';
import axios from 'axios';

const addTodoAsync = function* (action) {
  try {
    const resp = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      id: '123',
    })
    console.log(resp);
  } catch (ex) {
    console.log('failed', ex);
  }
};

export {
  addTodoAsync,
};

