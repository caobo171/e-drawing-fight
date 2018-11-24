import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {logOut} from "../../actions/authActions";

 class Navbar extends Component {
  render() {
    const {auth} = this.props;
    console.log(auth);
    return (
      
    <ul className="nav">
    { auth.uid ? 
        <li className="nav__avatar">
            <img className="nav__avatar--img" src="img/person2.png" alt="avatar" />
        </li> : "" } 
    { auth.uid ? 
        <Link className="nav__link" to="/">
            Dashboard
        </Link> : ""}
    { auth.uid ? 
        <li onClick={this.props.logOut} className="nav__link">
            LogOut
        </li> : ""}
    </ul>
    
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
