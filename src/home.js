import React, { Component } from 'react';

import history from './history';
import Header from './components/Header'
import Aside from './components/Aside'
import Setting from './pages/settting/index'
import Topics from "./pages/topics/index";
import About from "./pages/about/index";
import HomeIndex from "./pages/homeIndex/index";
import Tab from "./pages/table/index";
import News from "./pages/news/index";

import { Router, Route, Switch, Redirect } from "react-router-dom";



class Home extends Component {
    render() {
        return <Router history={history}>
            <div className="Home">
              <Header name="YG后台管理系统" />
              <Aside />
              <div className="aCont">
                <Switch>
                  <Route component={HomeIndex} path="/Home/HomeIndex" exact />
                  <Route component={Topics} path="/Home/Topics" />
                  <Route component={About} path="/Home/About" />
                  <Route component={Tab} path="/Home/Tab" />
                  <Route component={News} path="/Home/News" />
                  <Route component={Setting} path="/Home/Setting" />
                  <Redirect to="/Home/HomeIndex" />
                </Switch>
              </div>
            </div>
          </Router>;
    }
}

export default Home;