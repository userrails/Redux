import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '.././configureStore';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

class Blog extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <BlogForm />
          <BlogList />
        </div>
      </Provider>
    )
  }
}

export default Blog;