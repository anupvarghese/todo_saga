import C from '../constants';
import initialState from '../initial_state';
import { fromJS } from 'immutable';

export default (state = fromJS(initialState.todo), action) => {
  switch (action.type) {
    case C.ADD_TODO: {
      const { name } = action.data;
      return state.merge({
        name,
        completed: false,
      });
    }

    default: {
      return state;
    }
  }
};