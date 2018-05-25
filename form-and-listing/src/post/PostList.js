import React, {Component} from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render () {
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
  return {posts: state.postReducer.posts}
}

export default connect(mapStateToProps)(PostList);
