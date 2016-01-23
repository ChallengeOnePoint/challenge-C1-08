/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
import Map from './Map.jsx';
import {updateContact} from './../actions/Action'
/* eslint no-unused-vars: 1 */

const Contact = ({id, firstName, lastName, number, street, city, postCode}) => {

  const clickUpdateContact = () => {
    updateContact(id);
    location.hash = '#/contactList/editContact';
  };

  return (
    <div className="contact">
      <div className="contact-image"><Map /></div>
      <div className="contact-header">
        {firstName} {lastName}
      </div>
      <div className="contact-copy">
        <p>{number} {street} <br/> {postCode} {city}</p>
        <p><button onClick={clickUpdateContact}>Mettre à jour</button></p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  number: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  postCode: PropTypes.string,
}

export default Contact;
