import React, { Component } from 'react';
import UserForm from './UserForm';
import store from '.././configureStore';
import {Provider} from 'react-redux';
import UserDetail from './UserDetail';

class User extends Component {
  render () {
    return(
      <Provider store={store}>
        <div>
          <UserForm />
          <UserDetail />
        </div>
      </Provider>
    )
  }
}

export default User;