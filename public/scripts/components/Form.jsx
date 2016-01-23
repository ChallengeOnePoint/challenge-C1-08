import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize';

const Form = ({selectedContact}) => {
  const {firstName, lastName, number, street, city, postCode} = selectedContact;
  const putContact = () => {
    serialize(document.getElementById('form-contact'), {hash: true});
  };
  return (
    <from id="form-contact">
      <div className="form-line">
        <label for="lastName" className="form-label">Nom : </label>
        <input id="lastName" type="text" className="form-input" value={firstName}/>
      </div>
      <div className="form-line">
        <label for="firstName" className="form-label">Prénom : </label>
        <input id="firstName" type="text" className="form-input" value={lastName}/>
      </div>
      <div className="form-line">
        <label for="numero" className="form-label">Numéro : </label>
        <input id="numero" type="text" className="form-input" value={number}/>
      </div>
      <div className="form-line">
        <label for="street" className="form-label">Rue : </label>
        <input id="street" type="text" className="form-input" value={street}/>
      </div>
      <div className="form-line">
        <label for="city" className="form-label">Ville : </label>
        <input id="city" type="text" className="form-input" value={city}/>
      </div>
      <div className="form-line">
        <label for="postCode" className="form-label">Code Postal : </label>
        <input id="postCode" type="text" className="form-input" value={postCode}/>
      </div>
      <button onclick={putContact}>Mettre à Jour</button>
    </from>
  );
};

Form.propTypes = {
  selectedContact: PropTypes.object,
}

function select(state) {
  return {
    selectedContact: state.selectedContact,
  }
}

export default connect(select)(Form);
