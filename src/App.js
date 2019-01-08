/* eslint-disable */
import React, { Component } from 'react';
import Home from './home'
import Login from './login'
import './App.css';
import history from './history';



import {  Router, Route, Switch, Redirect } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
