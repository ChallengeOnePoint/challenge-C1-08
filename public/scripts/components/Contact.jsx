/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */

const Contact = ({firstName, lastName, number, street, city, postCode}) => {
  return (
    <li>
      <div>Nom : <span>{lastName}</span></div>
      <div>Prénom : <span>{firstName}</span></div>
      <div>Adresse : <span>{number}{street}{city}{postCode}</span></div>
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
