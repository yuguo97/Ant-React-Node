import React, { Component } from 'react';
import './App.css';
import history from './history';
import Header from './components/Header'
import Aside from './components/Aside'
import Setting from './pages/settting/index'
import Topics from "./pages/topics/index";
import About from "./pages/about/index";
import HomeIndex from "./pages/home/index";
import Tab from "./pages/table/index";
import News from "./pages/news/index";

import { Router, Route, Switch, Redirect } from "react-router-dom";

// import routes from './router'


class Home extends Component {
    render() {
        return <Router history={history}>
            <div className="App">
              <Header name="后台管理系统" />
              <Aside />
              <div className="aCont">
                <Switch>
                    <Route component={HomeIndex} path="/Home/HomeIndex" exact/>
                    <Route component={Topics} path="/Home/Topics" />
                    <Route component={About} path="/Home/About" />
                    <Route component={Tab} path="/Home/Tab" />
                    <Route component={News} path="/Home/News" />
                    <Route component={Setting} path="/Home/Setting" />
                  <Redirect to="/Home" />
                </Switch>
              </div>
            </div>
          </Router>;
    }
}

export default Home;