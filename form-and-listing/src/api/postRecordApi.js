class PostRecordApi {
  static getAllPostRecords() {
    return fetch('https://api-proj.herokuapp.com/posts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default PostRecordApi;
