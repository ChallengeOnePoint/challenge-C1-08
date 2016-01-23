import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize';
import assign from 'lodash/assign';
import {putContact} from './../actions/Action';

const Form = ({selectedContact}) => {
  const {firstname, lastname, number, street, city, postcode} = selectedContact;
  const onClickContact = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const objToSend = assign({}, selectedContact, serialize(document.getElementById('form-contact'), {hash: true}));
    putContact(objToSend);
  };
  const updateContact = event => {
  };

  return (
    <form id="form-contact">
      <div className="form-line">
        <label for="lastname" className="form-label">Nom : </label>
        <input id="lastname" name="lastname" type="text" className="form-input" value={firstname}
               onChange={updateContact}/>
      </div>
      <div className="form-line">
        <label for="firstname" className="form-label">Prénom : </label>
        <input id="firstname" name="firstname" type="text" className="form-input" value={lastname}
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
        <label for="postcode" className="form-label">Code Postal : </label>
        <input id="postcode" name="postcode" type="text" className="form-input" value={postcode}
               onChange={updateContact}/>
      </div>
      <button onClick={onClickContact}>Mettre à Jour</button>
    </form>
  );
};

Form.propTypes = {
  selectedContact: PropTypes.object,
};

function select(state) {
  return {
    selectedContact: state.selectedContact,
  }
}

export default connect(select)(Form);
