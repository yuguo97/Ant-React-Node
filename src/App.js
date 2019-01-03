import React, { Component } from 'react';
import './App.css';
import history from './history';
import Header from './components/Header'
import Aside from './components/Aside'
import Setting from './pages/settting/index'


import {  Router, Route, Switch, Redirect } from "react-router-dom";

import routes from './router'


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Header name="后台管理系统"/>
                    <Aside/>
                    <div className="aCont">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                            <Route component={Setting} path="/Setting"/>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
