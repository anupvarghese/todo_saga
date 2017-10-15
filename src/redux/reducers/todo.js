import C from '../constants';
import initialState from '../initial_state';
import { fromJS } from 'immutable';

export default (state = fromJS(initialState.todo), action) => {
  switch (action.type) {
    case C.TODO_REQUEST: {
      return state.set('loading', true);
    }

    case C.ADD_TODO_SUCCESS: {
      const { name, id } = action.data;
      return state.merge({
        items: state.get('items').concat({
          id,
          name,
          completed: false,
        }),
        loading: false,
      });
    }

    case C.ADD_TODO_ERROR:
    case C.REMOVE_TODO_ERROR: {
      const { error } = action;
      return state.merge({
        error,
      }).set('loading', false);
    }

    case C.REMOVE_TODO_SUCCESS: {
      const { name } = action;
      return state.merge({
        items: state.get('items').filter(i => i.name !== name),
        loading: false,
      });
    }

    default: {
      return state;
    }
  }
};