/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import Contact from './Contact.jsx';

const ContactList = ({contacts}) => {
  const list = contacts.map((contact) => {
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
        number={number}
        street={street}
        city={city}
        postcode={postcode}
        firstname={firstname}
        lastname={lastname} />
    );
  });

  return (
    <div className="ContactList">
      {list}
    </div>
  );
};

export default ContactList;
