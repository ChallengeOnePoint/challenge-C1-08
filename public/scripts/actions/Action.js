import reqwest from 'reqwest';
import Store from './../Store';
import {GET_CONTACTS, UPDATE_CONTACT, PUT_CONTACT} from './ACTIONS_ENUM';

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

export function updateContact(idContact) {
  Store.dispatch({
    type: UPDATE_CONTACT,
    idContact: idContact,
  });
}

export function putContact(contact) {
  reqwest({
    url: '/contacts',
    type: 'json',
    method: 'put',
    contentType: 'application/json',
    data: contact,
    success: (contact) => {
      Store.dispatch({
        type: PUT_CONTACT,
        contact: contact,
      });
    },
  });
}
