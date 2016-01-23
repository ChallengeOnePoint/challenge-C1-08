import {createStore} from 'redux';
import assign from 'lodash/assign';
import find from 'lodash/find'
import {GET_CONTACTS, UPDATE_CONTACT} from './actions/ACTIONS_ENUM';

const initialState = {
  contacts: [],
  selectedContact: {},
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return assign({}, state, {contacts: action.contacts});
    case UPDATE_CONTACT:
      return assign({}, state, {selectedContact: find(state.contacts, {_id: action.idContact})});
    default:
      return state;
  }
});

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
