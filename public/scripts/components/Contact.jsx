/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */

const Contact = ({firstName, lastName, number, street, city, postCode}) => {
  return (
    <li className="contacts-line">
      <div><span className="contacts-line-label">Nom</span> : <span>{lastName}</span></div>
      <div><span className="contacts-line-label">Prénom</span> : <span>{firstName}</span></div>
      <div><span className="contacts-line-label">Adresse</span> : <span>{number} {street} <br/> {postCode} {city}</span>
      </div>
    </li>
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
