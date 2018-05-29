import React, { Component } from 'react';
import UserForm from './UserForm';
import UserDetail from './UserDetail';

class User extends Component {
  render () {
    return(
        <div>
          <div className="form-group">
            <UserForm />
          </div>
          <div className="form-group">
            <UserDetail />
          </div>
        </div>
    )
  }
}

export default User;
