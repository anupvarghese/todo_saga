import C from '../constants';
import initialState from '../initial_state';
import { fromJS } from 'immutable';

export default (state = fromJS(initialState.todo), action) => {
  switch (action.type) {
    case C.ADD_TODO_SUCCESS: {
      const { name } = action;
      return state.merge({
        name,
        completed: false,
      });
    }

    case C.ADD_TODO_ERROR: {
      const { error } = action;
      return state.merge({
        error,
      });
    }

    default: {
      return state;
    }
  }
};