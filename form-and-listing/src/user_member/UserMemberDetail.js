import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserMemberDetail extends Component {
  render () {
    console.log("props-user-member", this.props.user_member)
    if (this.props.user_member.constructor.name == "Object") {
      const user_member = this.props.user_member;
      return (
        <ul>
          <li>First Name: {user_member.first_name}</li>
          <li>Last Name: {user_member.last_name}</li>
        </ul>
      );
    }
    else {
      const user_member = this.props.user_member.pop();
      return (
        <ul>
          <li>First Name: {user_member.first_name}</li>
          <li>Last Name: {user_member.last_name}</li>
        </ul>
      )
    }
  }
}

const mapStateToProps = state => {
  return { user_member: state.userMemberReducer.user_member}
}

export default connect(mapStateToProps)(UserMemberDetail);