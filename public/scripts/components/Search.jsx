/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import {connect} from 'react-redux';

const ContactList = ({contacts}) => {
  const list = contacts.slice(0, 100).map((contact, index) => {
    const {
      number,
      street,
      city,
      postcode,
      firstname,
      lastname,
      } = contact;

    return (
      <Contact
        key={index}
        id={index}
        number={number}
        street={street}
        city={city}
        postCode={postcode}
        firstName={firstname}
        lastName={lastname}/>
    );
  });

  return (
    <div className="contacts">
      {list}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
}

function select(state) {
  return {
    contacts: state.contacts,
  }
}


const Search = ({contacts}) => {

  let result = [];

  function search(e) {
    const queryString = e.target.value;
    contacts.map((contact) => {
      const {firstName, lastname} = contact;
      if (firstName.includes(queryString) || lastname.includes(queryString)) {
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
