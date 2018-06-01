import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '.././pages/Home';
import Contact from '.././pages/Contact';
import About from '.././pages/About';
import Post from '.././post/';
import Blog from '.././blog/';
import Category from '.././category/';
import User from '.././user/';
import UserMember from '.././user_member/';
import PostRecord from '.././post_record/';
import LoginPage from '../login/';
import Logout from '../logout/';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />

      {/* <Route path="/post" component={Post} /> */}
      <PrivateRoute path="/post" component={Post} />
      <PrivateRoute path="/blog" component={Blog} />
      <PrivateRoute path="/category" component={Category} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/user_member" component={UserMember} />
      <PrivateRoute path="/post_records" component={PostRecord} />

      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={Logout} />
    </Switch>
  )
}


// var is_loggedIn = this.state.is_authenticated;

function is_loggedIn() {

}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      this.is_loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);
