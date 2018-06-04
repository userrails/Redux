import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../configureStore';
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
//import Logout from '../logout/';


// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store)

export default () => {
  return (
    <ConnectedRouter history={history}>
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
      </Switch>
    </ConnectedRouter>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwt') ? (
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
