import React, { Component } from 'react';
import './App.css';
import store from './store/posts/reducers';
import Form from './components/posts/Form';
import Listings from './components/posts/Listings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fill out the form</h1>

        <Form store={store} />
        <Listings store={store} />
      </div>
    );
  }
}

export default App;
