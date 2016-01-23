/* eslint no-unused-vars: 0 */
import React, {PropTypes} from 'react';
/* eslint no-unused-vars: 1 */
import {Router} from 'react-router';
import ContactList from './ContactList.jsx';

const Main = ({children}) => {
  return (
    <div className="main">
      <header className="centered-navigation" role="banner">
        <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
          <li className="nav-link"><a href="#/search">Search</a></li>
          <li className="nav-link"><a href="#/contactList">Contact List</a></li>
        </ul>
      </header>
      {children}
    </div>
  );
}

export default Main;
