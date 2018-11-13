import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Test from "./components/Test";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import test from "./components/auth/test";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="App">
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/test" component={test} />
              <Route path="/testplay" component={Test}/>
            </div>
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
