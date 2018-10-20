import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Test from "./components/Test";

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
              <h1>Hello</h1>
            </div>
            <Test />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
