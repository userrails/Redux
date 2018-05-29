import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

class Blog extends Component {
  render () {
    return (
        <div>
          <BlogForm />
          <BlogList />
        </div>
    )
  }
}

export default Blog;
