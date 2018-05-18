import React, { Component } from 'react';
import './App.css';
import store from './configureStore';
import PostForm from './post/PostForm';
import PostList from './post/PostList';
import BlogForm from './blog/BlogForm';
import BlogList from './blog/BlogList';
import CategoryForm from './category/CategoryForm';
import CategoryList from './category/CategoryList';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';
import Footer from './app/Footer';

class App extends Component {
  render() {
  console.log("store", store)
    return (
      <div className="App">
        <NavbarHeader />
        <Routes />

        <h1>Fill out the form</h1>

        <PostForm store={store} />
        <PostList store={store} />
        <BlogForm store={store} />
        <BlogList store={store} />
        <CategoryForm store={store} />
        <CategoryList store={store} />
        <Footer />
      </div>
    );
  }
}

export default App;
