import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {logIn, logOut} from '../../actions/authActions';

import Register from './Register';

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
    return (
      <section className="login" id="login">
        <form className="login__form form" onSubmit= {this.onSubmit}>
        <i className="heading-secondary__icon fas fa-paint-brush"></i>
        <h2 className="heading-secondary">
             Edrawing FIGHT
          </h2>
          <div className="form__control">
            <i className="fas fa-envelope form__title"></i>
            <input 
              className="form__input"
              placeholder="email"
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange ={this.onChange}
            />
          </div>
          <div className="form__control">
              <i className="fas fa-unlock form__title"></i>
              <input 
                className="form__input"
                placeholder="password"
                type="password"
                name="password"
                required
                value={this.state.password}
                onChange ={this.onChange}
              />
          </div>  
          <input 
            className="form__submit login_login btn" 
            type="submit"
            value="LOGIN"
          />
           <div className="login__register">
              Don't have account yet! <a className="login__register--a" href="#popup">Sign Up Now!</a>
            </div>
           
        </form>
        
        <Register />
      </section>
    )
  }
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