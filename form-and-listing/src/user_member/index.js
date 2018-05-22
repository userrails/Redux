import React, { Component } from 'react';
import UserMemberForm from './UserMemberForm';
import store from '.././configureStore';
import {Provider} from 'react-redux';
import UserMemberDetail from './UserMemberDetail';

class UserMember extends Component {
  render () {
    return(
      <Provider store={store}>
        <div>
          <div className="form-group">
            <UserMemberForm />
          </div>
          <div className="form-group">
            <UserMemberDetail />
          </div>
        </div>
      </Provider>
    )
  }
}

export default UserMember;