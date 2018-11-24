import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logIn, logOut } from "../../actions/authActions";

class Login extends Component {


  onSubmit = e => {
    e.preventDefault();
    this.props.logIn();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = () => {
    this.props.logOut();
  };

  componentDidMount(){
    console.log('check history',this.props.history);
  } 

  render() {
    if(this.props.auth){
      this.props.history.push('/')
    }
    return (
      <React.Fragment>
        <section className="login" id="login">
          <form className="login__form form" onSubmit={this.onSubmit}>
            <i className="heading-secondary__icon fas fa-paint-brush" />
            <h2 className="heading-secondary">Edrawing FIGHT</h2>
            <input
              className="form__submit login_login btn"
              type="submit"
              value="LOGIN"
            />
          </form>
        </section>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

const mapStatetoProps = state => {
  return {
    auth:state.user.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => {
      dispatch(logIn());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Login);
