/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import {Router} from 'react-router';
import ContactList from './ContactList.jsx';

const Main = ({children}) => {
  return (
    <div className="main">
      <ul className="header">
        <a href="#/search"><li>
          Search
        </li></a>
        <a href="#/contactList"><li>
          Contact List
        </li></a>
      </ul>
      {children}
    </div>
  );
}

export default Main;
