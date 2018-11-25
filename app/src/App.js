import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/auth/Login";
import Arena from './components/Arena';
import Global from './components/socket/Global';
import Dashboard from './components/Dashboard';
import Profile from './components/Profiles';
import Practice from './components/practice/Practice';
import test from "./components/auth/test";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
              <Route path="/" component ={Global}/>
              <Route path="/" exact component={Dashboard} />
              <Route path="/login" exact component={Login} />
              <Route path="/test" exact component={test} />
              <Route path="/testplay" exact component={Test}/>
              <Route path = "/arena" exact component = {Arena}/>
              <Route path = "/profile/:id" exact component = {Profile}/>
              <Route path="/testplay/:id"exact component={Test}/>
              <Route path = "/profile" exact component = {Profile}/>
              <Route path = "/practice" exact component = {Practice}/>
            </div>
            
      
        </Router>
      </Provider>
    );
  }
}

export default App;
