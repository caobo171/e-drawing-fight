import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/auth/Login";
import Arena from './components/Arena';
import Global from './components/socket/Global';
import Dashboard from './components/Dashboard';
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
              <Global/>
              <Route path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/test" component={test} />
              <Route path="/testplay" component={Test}/>
              <Route path = "/arena" component = {Arena}/>
            </div>
            
      
        </Router>
      </Provider>
    );
  }
}

export default App;
