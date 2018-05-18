import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '.././pages/Home';
import Contact from '.././pages/Contact';
import About from '.././pages/About';
import Post from '.././post/';
import Blog from '.././blog/';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/post" component={Post} />
      <Route path="/blog" component={Blog} />
    </Switch>
  )
}