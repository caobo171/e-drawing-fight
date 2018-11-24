import React, { Component } from 'react';
import {connect} from 'react-redux';

import {register} from '../../actions/authActions'

class Register extends Component {
  state={
    name:'',
    email:'',
    password:'',
    password2:'',
    avatar:''
 }

 onChange = e => this.setState({[e.target.name]: e.target.value}); 

 onSubmit = e => {
   e.preventDefault();
   console.log('check',this.state);
   this.props.register(this.state)
 }

 render() {
    return (
      <section className="register popup" id="popup">
        <form className="register__form form popup__content" onSubmit= {this.onSubmit}>
        <a href="#login" className="popup__close">&times;</a>
         <div className="form__control">
         <i className="fas fa-user form__title"></i>
          <input
             className="form__input"
             placeholder="name"
             name="name"
             type="text"
             required
             value={this.state.name}
             onChange={this.onChange}
          />
         </div>

         <div className="form__control">
         <i className="far fa-user-circle form__title"></i>
          <input
             className="form__input"
             placeholder="avatar link"
             name="avatar"
             type="text"
             value={this.state.avatar}
             onChange={this.onChange}
          />
         </div>
         
         <div className="form__control">
         <i className="fas fa-envelope form__title"></i>
          <input
             className="form__input"
             placeholder="email"
             name="email"
             type="email"
             required
             value={this.state.email}
             onChange={this.onChange}
          />
         </div>

         <div className="form__control">
         <i className="fas fa-user-lock form__title"></i>
          <input
             className="form__input"
             placeholder="password"
             name="password"
             type="password"
             required
             value={this.state.password}
             onChange={this.onChange}
          />
         </div>

         <div className="form__control">
         <i className="fas fa-unlock form__title"></i>
          <input
             className="form__input"
             placeholder="confirm password"
             name="password2"
             type="password"
             required
             value={this.state.password2}
             onChange={this.onChange}
          />
         </div>
        
          <input 
            className="form__submit login_login btn"
            type="submit"
            value="REGISTER"
          />     
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => {
      dispatch(register(newUser));
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)