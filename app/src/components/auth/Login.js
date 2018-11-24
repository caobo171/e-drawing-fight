import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {logIn, logOut} from '../../actions/authActions';

class Login extends Component {
  state ={
    email: '',
    password: ''
  }

  onSubmit = e =>{
    e.preventDefault();
    this.props.logIn(this.state);
  
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onClick = ()=> {
    this.props.logOut();
  }

  render() {
    console.log(this.props.auth);
    return (
      <div>
        <form onSubmit= {this.onSubmit}>
          <label>Email</label>
          <input 
            type="text"
            name="email"
            required
            value={this.state.email}
            onChange ={this.onChange}
          />
          <label>PassWord</label>
          <input 
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange ={this.onChange}
          />
          <input 
            type="submit"
            value="Login"
          />
        </form>
        <button onClick={this.onClick}>Logout</button>
        <Link to ='/testplay'>aaaaa</Link>
      </div>
    )
  }
}


Login.PropTypes ={
  firebase: PropTypes.object.isRequired
}

const mapStatetoProps = (state)=>{
  return{
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logIn: (creds) => {
      dispatch(logIn(creds));
    },
    logOut: ()=>{
      dispatch(logOut());
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps )(Login);