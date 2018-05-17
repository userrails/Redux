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
import Navbar from './app/Navbar';
import Footer from './app/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
  console.log("store", store)
    return (
      <Router>
      <div className="App">
        <Navbar />
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
      </Router>
    );
  }
}

export default App;
