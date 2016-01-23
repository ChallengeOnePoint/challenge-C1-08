import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize';

const Form = ({selectedContact}) => {
  const {firstname, lastname, number, street, city, postcode} = selectedContact;
  const putContact = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(serialize(document.getElementById('form-contact'), {hash: true}));
  };
  const updateContact = (event) => {

  };
  return (
    <form id="form-contact">
      <div className="form-line">
        <label for="lastName" className="form-label">Nom : </label>
        <input id="lastName" name="lastName" type="text" className="form-input" value={firstname}
               onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="firstName" className="form-label">Prénom : </label>
        <input id="firstName" name="firstName" type="text" className="form-input" value={lastname}
               onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="numero" className="form-label">Numéro : </label>
        <input id="numero" name="numero" type="text" className="form-input" value={number} onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="street" className="form-label">Rue : </label>
        <input id="street" name="street" type="text" className="form-input" value={street} onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="city" className="form-label">Ville : </label>
        <input id="city" name="city" type="text" className="form-input" value={city} onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="postCode" className="form-label">Code Postal : </label>
        <input id="postCode" name="postCode" type="text" className="form-input" value={postcode}
               onChange={updateContact}/>
      </div>
      <div onClick={putContact}>Mettre à Jour</div>
    </form>
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
