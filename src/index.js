import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import NavDG from './components/NavDG';
import PortfolioDG from './components/PortfolioDG';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Contact from './components/Contact';

import './styles/main.scss';

var routes = (
  <Router history = {browserHistory}>
    <Route path = "/" component = {PortfolioDG} >
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
      <Route path = "myportfolio" component = {Portfolio} />
      <Route path = "contact" component = {Contact} />
    </Route>
  </Router>
);

ReactDOM.render( routes, document.getElementById('app') );
