import React from 'react';
import { connect } from 'react-redux';

class Listings extends React.Component {
  render () {
    console.log('propstest-list', this.props.posts);
    if (this.props.posts) {
      return (
        <ul>
          {
            this.props.posts.map(post => (
              <li key={post.id}>{post.id}--{post.title}</li>
            ))};
        </ul>
      );
    }
    else {
      return (
        <div>
          <h2>No items found on this list.</h2>
        </div>
        )
    }
  }
}

export default Listings;