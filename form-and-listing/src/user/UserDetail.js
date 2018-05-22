import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render () {
    if (this.props.user.constructor.name == "Object") {
      const user = this.props.user;
      return (
        <ul>
          <li>{user.first_name}</li>
          <li>{user.last_name}</li>
        </ul>
      );
    }
    else {
      const user = this.props.user.pop();
      return (
        <ul>
          <li>{user.first_name}</li>
          <li>{user.last_name}</li>
        </ul>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('11. state-user', state)
  return { user: state.userReducer.user}
}

export default connect(mapStateToProps)(UserDetail);