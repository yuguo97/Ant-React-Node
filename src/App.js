/*
 * @Author: 隗果
 * @Date: 2020-09-03 22:34:18
 * @Last Modified by:   隗果
 * @Last Modified time: 2020-09-03 22:34:18
 */
 
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
