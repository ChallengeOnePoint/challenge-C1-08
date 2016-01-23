import React, {PropTypes} from 'react';

const Contact = ({firstname, lastname, number, street, city, postcode}) => {
  return (
    <li>
      <div>Nom : <span>{lastname}</span></div>
      <div>Prénom : <span>{firstname}</span></div>
      <div>Adresse : <span>{number}{street}{city}{postcode}</span></div>
    </li>
  );
};

export default Contact;