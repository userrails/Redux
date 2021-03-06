import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostRecordAction from './PostRecordAction';
import axios from 'axios';
// import postRecordApi from '../api/postRecordApi';

class PostRecordList extends Component {
  // in this case we have not used any event handlers like button click etc
  // so we have to load api records before component mount (not exactly but similar to js onload event)
  componentDidMount() {
    // fetch('https://api-proj.herokuapp.com/posts')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     this.props.PostRecordsDispatch(json);
    //   })
    //   .catch(error => {
    //     return error;
    //   });

    axios.get('https://api-proj.herokuapp.com/posts')
      .then(response => {
        return response.data
      })
      .then(data => {
        this.props.PostRecordsDispatch(data)
      })
      .catch(function (error) {
        return error;
      });
  }

  render () {
    if (this.props.post_records) {
      return (
        <ul>
          {
            this.props.post_records.map(post_record => (
              <li key={post_record.id}>Post -> {post_record.id}--{post_record.name}</li>
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

const mapDispatchToProps = dispatch => {
  return {
    PostRecordsDispatch: post_record => dispatch(PostRecordAction(post_record))
  };
};


const mapStateToProps = state => {
  return {post_records: state.postRecordReducer.post_records}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostRecordList);
