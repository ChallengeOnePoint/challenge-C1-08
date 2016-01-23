import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux'
import Store from './Store';
import ContactList from './components/ContactList.jsx'
import {getContacts} from './actions/Action';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={ContactList} onEnter={getContacts}></Route>
    </Router>
  </Provider>,
  document.getElementById('body'));