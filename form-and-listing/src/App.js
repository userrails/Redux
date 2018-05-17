import React, { Component } from 'react';
import './App.css';
import store from './store/';
import PostForm from './components/posts/Form';
import PostListings from './components/posts/Listings';
import BlogForm from './components/blogs/Form';
import BlogListings from './components/blogs/Listings';
import CategoryForm from './category/CategoryForm';
import CategoryList from './category/CategoryList';

class App extends Component {
  render() {
  console.log("store", store)
    return (
      <div className="App">
        <h1>Fill out the form</h1>

        <PostForm store={store} />
        <PostListings store={store} />
        <BlogForm store={store} />
        <BlogListings store={store} />
        <CategoryForm store={store} />
        <CategoryList store={store} />
        
      </div>
    );
  }
}

export default App;
