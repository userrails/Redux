import React, { Component } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import store from '.././configureStore';
import {Provider} from 'react-redux';

class Post extends Component {
  render () {
    return(
        <Provider store={store}>
          <div>
            <PostForm />
            <PostList />
          </div>
        </Provider>
    )
  }
}

export default Post;