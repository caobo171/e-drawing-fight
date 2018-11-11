import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
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
   this.props.register(this.state)
 }

 render() {
    return (
      <div>
        <form onSubmit= {this.onSubmit}>
          <label>Name</label>
          <input
             name="name"
             type="text"
             required
             value={this.state.name}
             onChange={this.onChange}
          />
          <label>Email</label>
          <input
             name="email"
             type="email"
             required
             value={this.state.email}
             onChange={this.onChange}
          />
          <label>Password</label>
          <input
             name="password"
             type="password"
             required
             value={this.state.password}
             onChange={this.onChange}
          />
          <label>Confirm Password</label>
          <input
             name="password2"
             type="password"
             required
             value={this.state.password2}
             onChange={this.onChange}
          />
          <label>Avatar Link</label>
          <input
             name="avatar"
             type="text"
             required
             value={this.state.avatar}
             onChange={this.onChange}
          />
           <input 
            type="submit"
            value="Register"
          />     
        </form>
      </div>
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