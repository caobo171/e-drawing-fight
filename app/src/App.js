import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/auth/Login";

import Global from './components/socket/Global';

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
              <Route path="/login" component={Login} />
              <Route path="/test" component={test} />
              <Route path="/testplay" component={Test}/>
            </div>
            
      
        </Router>
      </Provider>
    );
  }
}

export default App;
