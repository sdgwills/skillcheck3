import React from 'react'
import { HashRouter as Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path ='/wizard' component={Wizard} />
  </Switch>
)