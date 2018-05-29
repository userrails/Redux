import React, { Component } from 'react';
import UserMemberForm from './UserMemberForm';
import UserMemberDetail from './UserMemberDetail';

class UserMember extends Component {
  render () {
    return(
        <div>
          <div className="form-group">
            <UserMemberForm />
          </div>
          <div className="form-group">
            <UserMemberDetail />
          </div>
        </div>
    )
  }
}

export default UserMember;
