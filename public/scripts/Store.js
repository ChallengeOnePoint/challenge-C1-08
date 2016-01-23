import {createStore} from 'redux';
import assign from '../../node_modules/lodash/assign';
import {GET_CONTACTS} from './actions/ACTIONS_ENUM';

const initialState = {
  contacts: [],
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return assign({}, state, {contacts: action.contacts});
    default:
      return state;
  }
});

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
