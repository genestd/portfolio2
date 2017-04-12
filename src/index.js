import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import PortfolioDG from './components/PortfolioDG';
import './styles/main.scss';


ReactDOM.render( <PortfolioDG/>, document.getElementById('app') );
