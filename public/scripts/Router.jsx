import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux'
import Store from './Store';
import Main from './components/Main.jsx';
import Search from './components/Search.jsx';
import ContactList from './components/ContactList.jsx';
import {getContacts} from './actions/Action';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/contactList" component={ContactList} onEnter={getContacts}></Route>
        <Route path="/search" component={Search}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('body'));
