import React, { Component } from 'react';
import {connect} from 'react-redux';

import {testcreate} from '../../actions/testAction';


class test extends Component {
    state={
        name:'',
        story:''
    }

    onChange= e => this.setState({[e.target.name]: e.target.value})

    onSubmit= e => {
        e.preventDefault();
        this.props.testCreate(this.state);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input
               name='name'
               type='text'
               value={this.state.name}
               onChange={this.onChange}
               required
            />
            <input
               name='story'
               type='text'
               value={this.state.story}
               onChange={this.onChange}
               required
            />
            <input
               type='submit'
               value='click me'
            />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        testCreate: (test) => dispatch(testcreate(test))
    }
}

export default connect(null, mapDispatchToProps)(test);