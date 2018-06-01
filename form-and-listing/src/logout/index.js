import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LogoutAction from './LogoutAction';

class Logout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(LogoutAction());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(Logout);
