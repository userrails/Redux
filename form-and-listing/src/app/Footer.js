import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '.././assets/styles/Footer.css'

class Footer extends Component {
  render () {
    return (
      <div class="bg-primary">
        <footer>
            <div class="container-fluid text-center text-md-left bg-primary">
                <div class="row">

                    <div class="col-md-6">
                        <h5 class="text-uppercase">My React Redux App</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div class="col-md-6">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/post">Post</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-copyright py-3 text-center">
                © 2018 Copyright:
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer;