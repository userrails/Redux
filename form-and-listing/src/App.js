import React, { Component } from 'react';
import './App.css';
import store from './store/configureStore';
import PostForm from './post/PostForm';
import PostList from './post/PostList';
import BlogForm from './blog/BlogForm';
import BlogList from './blog/BlogList';
import CategoryForm from './category/CategoryForm';
import CategoryList from './category/CategoryList';

class App extends Component {
  render() {
  console.log("store", store)
    return (
      <div className="App">
        <h1>Fill out the form</h1>

        <PostForm store={store} />
        <PostList store={store} />
        <BlogForm store={store} />
        <BlogList store={store} />
        <CategoryForm store={store} />
        <CategoryList store={store} />
      </div>
    );
  }
}

export default App;
