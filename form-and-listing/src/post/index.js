import React, { Component } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

class Post extends Component {
  render () {
    return(
        <div>
          <PostForm />
          <PostList />
        </div>
    )
  }
}

export default Post;
