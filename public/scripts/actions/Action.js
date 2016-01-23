import reqwest from 'reqwest';
import Store from './../Store';
import {GET_CONTACTS} from './ACTIONS_ENUM';

export function getContacts() {
  reqwest({
    url: '/contacts',
    success: (result) => {
      Store.dispatch({
        type: GET_CONTACTS,
        contacts: result,
      });
    },
  });
}
