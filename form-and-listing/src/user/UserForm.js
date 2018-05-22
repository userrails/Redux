import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserAction } from './UserAction';
import { Control, Form, actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => {
  return {
    addUserDispatch: user => dispatch(UserAction(user))
  };
};

class UserForm extends Component {
  constructor () {
    super();

    this.state = {
      first_name: '',
      last_name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var first_name = event.target.elements.firstName.value;
    var last_name = event.target.elements.lastName.value;
    
    this.props.addUserDispatch({first_name, last_name});
    
    this.setState({first_name: ''});
    this.setState({last_name: ''});
  }

  render () {
    return (
      <form model="user" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <Control.text model="firstName" id="firstName" />

        <label htmlFor="lastName">Last name:</label>
        <Control.text model="lastName" id="lastName" />

        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default connect(null, mapDispatchToProps)(UserForm);