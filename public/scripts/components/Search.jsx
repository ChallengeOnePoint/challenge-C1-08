/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import {connect} from 'react-redux';
import ContactList from './ContactList.jsx';

const Search = ({contacts}) => {

  let result = [];

  function search(e) {
    const queryString = e.target.value;
    debugger;
    contacts.map((contact) => {
      const {firstName, lastname} = contact;
      debugger;
      if (firstName.includes(queryString) || lastName.includes(queryString)) {
        result.push(contact);
      }
    })
  }

  return (
    <div className="search">
      <input type="text" placeholder="Chercher un contact" onKeyPress={search}></input>
      <button onClick={search}><img src="./loupe.svg"/></button>
      <div className="contactList">{result}</div>
      <ContactList contacts={result}/>
    </div>
  );
}

function select(state) {
  return {
    contacts: state.contacts,
  }
}

export default connect(select)(Search);
