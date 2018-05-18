import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
      <div>
        <p>Sidebar:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer;