import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '.././pages/Home';
import Contact from '.././pages/Contact';
import About from '.././pages/About';
import Post from '.././post/';
import Blog from '.././blog/';
import Category from '.././category/';
import User from '.././user/';
import UserMember from '.././user_member/';
import PostRecord from '.././post_record/';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/post" component={Post} />
      <Route path="/blog" component={Blog} />
      <Route path="/category" component={Category} />
      <Route path="/user" component={User} />
      <Route path="/user_member" component={UserMember} />
      <Route path="/post_records" component={PostRecord} />
    </Switch>
  )
}