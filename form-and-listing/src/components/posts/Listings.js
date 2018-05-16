import React from 'react';
import { connect } from 'react-redux';

class Listings extends React.Component {
  render () {
    console.log('5.propstest-list', this.props.posts);
    if (this.props.posts) {
      return (
        <ul>
          {
            this.props.posts.map(post => (
              <li key={post.id}>Post -> {post.id}--{post.title}</li>
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

const mapStateToProps = state => {
  console.log('4. state-listings', state.posts)
  return {posts: state.posts}
}

export default connect(mapStateToProps)(Listings);