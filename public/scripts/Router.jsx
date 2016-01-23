import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux'
import Store from './Store';
import {getInfo} from './actions/Action';
import Index from './components/Index.jsx';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}></Route>
    </Router>
  </Provider>,
  document.getElementById('body'));

getInfo();