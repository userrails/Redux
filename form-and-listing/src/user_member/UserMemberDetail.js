import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserMemberDetail extends Component {
  render () {
    if (this.props.user_member.constructor.name === "Object") {
      const user_member = this.props.user_member;
      return (
        <ul>
          <li>First Name: {user_member.first_name}</li>
          <li>Last Name: {user_member.last_name}</li>
          <li>Gender: {user_member.gender}</li>
          <li>Category: {user_member.category}</li>
          <li>Is Employed: {user_member.employed ? 'True' : 'False'}</li>
          <li>Biography: {user_member.bio}</li>
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
