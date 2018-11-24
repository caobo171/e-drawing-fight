import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {UserIsAuthenticated, UserIsNotAuthenticated} from '../src/helpers/auth';

import Test from "./components/Test";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/DashBoard";
import Arena from "./components/pages/Arena";
import Ranking from "./components/pages/Ranking";
import Profile from "./components/pages/Profile";
import Match from "./components/pages/Match";

import Navbar from "./components/layouts/Navbar";
import UserSidebar from "./components/layouts/Sidebar/UserSidebar";

import test from "./components/auth/test";

import { Provider } from "react-redux";
import { ToastContainer} from 'react-toastify'
import store from "./store";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="App">
            <ToastContainer />
              <Navbar />
              <UserSidebar />

              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
              <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
              <Route exact path="/arena" component={UserIsAuthenticated(Arena)} />
              <Route exact path="/ranking" component={UserIsAuthenticated(Ranking)} />
              <Route exact path="/profile" component={UserIsAuthenticated(Profile)} />
              <Route exact path="/match" component={UserIsAuthenticated(Match)} />
              

              {/* TEST */}
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
