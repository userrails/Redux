import React, {Component} from 'react';
import { connect } from 'react-redux';

class BlogList extends Component {
  render () {
    if (this.props.blogs) {
      return (
        <ul>
          {
            this.props.blogs.map(blog => (
              <li key={blog.id}>Blog -> {blog.id}--{blog.title}</li>
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
  return {blogs: state.blogReducer.blogs}
}

export default connect(mapStateToProps)(BlogList);
