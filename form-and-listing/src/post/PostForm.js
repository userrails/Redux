import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PostAction } from './PostAction';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
  return {
    addPostDispatch: post => dispatch(PostAction(post))
  };
};

class PostForm extends Component {
  constructor () {
    super();

    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addPostDispatch({title, id});
    this.setState({title: ''});
  }

  render () {
    const {title} = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={this.handleChange} />    
        </div>
        <button type="submit">Save Post</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(PostForm);