import React, {Component} from 'react';
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LogoutFunction } from "./../auth/LogoutAction";

class NavbarHeader extends Component {
  _handleLogout = () => {
    this.props.LogoutFunction();
  }

  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/contact">
                Contact
              </NavItem>
              <NavItem eventKey={2} href="/about">
                About
              </NavItem>
              { this.props.is_authenticated && (
                <React.Fragment>
                <NavItem eventKey={2}>
                  <Link to="/post">
                    Post
                </Link>
                </NavItem>

                <NavItem eventKey={2}>
                  <Link to="/blog">
                    Blog
                </Link>
                </NavItem>
                <NavItem eventKey={2} href="/category">
                  Category
              </NavItem>
                <NavItem eventKey={2} href="/user">
                  Add User
              </NavItem>
                <NavItem eventKey={2} href="/user_member">
                  Add User Member
              </NavItem>
                <NavItem eventKey={2} href="/post_records">
                  Post Records
              </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                </React.Fragment>
                ) }
                </Nav>

            <Nav pullRight>
              {!this.props.is_authenticated && (
                <React.Fragment>
                  <NavItem eventKey={1} href="/login">
                    Login
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
                  </NavItem>
                </React.Fragment>
                )}
                <NavItem eventKey={1} onClick={this._handleLogout}>
                  Logout
                </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    is_authenticated: state.authReducer.is_Authenticated
  }
}

export default connect(mapStateToProps, { LogoutFunction })(NavbarHeader);
