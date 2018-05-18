import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';
import Footer from './app/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        
        <div className="container">
          <Routes />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
