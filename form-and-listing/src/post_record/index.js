import React, { Component } from 'react';
import PostRecordList from './PostRecordList';
import store from '.././configureStore';
import {Provider} from 'react-redux';

class PostRecord extends Component {
  render () {
    return(
      <Provider store={store}>
        <div>
          <PostRecordList />
        </div>
      </Provider>
    )
  }
}

export default PostRecord;