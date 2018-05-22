import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserAction } from './UserAction';
import { Control, Form, actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => {
  return {
    addUserDispatch: user => dispatch(UserAction(user))
  };
};

//const mapStateToProps = state => {
  //console.log('11. state-user', state)
  //return { user: state.userReducer.user}
//}

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
    console.log("first_name", first_name);
    console.log("last_name", last_name);
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
          Finish Registration
        </button>
      </form>
    );
  }
}
export default connect(null, mapDispatchToProps)(UserForm);