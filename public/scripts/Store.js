import {createStore} from 'redux';
import assign from '../../node_modules/lodash/assign';
import {GET_INFOS} from './actions/ACTIONS_ENUM';

const initialState = {
  result: {},
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case GET_INFOS:
      return assign({}, state, action);
    default:
      return state;
  }
});

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
