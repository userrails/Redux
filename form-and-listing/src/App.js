import React, { Component } from 'react';
import './App.css';
import postStore from './store/posts/';
import Form from './components/posts/Form';
import Listings from './components/posts/Listings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fill out the form</h1>

        <Form store={postStore} />
        <Listings store={postStore} />
      </div>
    );
  }
}

export default App;
