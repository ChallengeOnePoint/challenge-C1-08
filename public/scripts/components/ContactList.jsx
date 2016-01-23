/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import Contact from './Contact.jsx';
import {connect} from 'react-redux'

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
    <ul className="contacts">
      {list}
    </ul>
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

export default connect(select)(ContactList);
