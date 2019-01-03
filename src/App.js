/* eslint-disable */
import React, { Component } from 'react';
import Home from './home'
import Login from './login'
import './App.css';
import history from './history';
// import Header from './components/Header'
// import Aside from './components/Aside'
// import Setting from './pages/settting/index'


import {  Router, Route, Switch, Redirect } from "react-router-dom";

// import routes from './router'


class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
