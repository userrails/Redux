const initialState = {
  post_records: []
};

const postRecordReducer = (state=initialState, action) => {
  console.log('1. post record reducer is running');
  switch(action.type) {
    case 'GET_ALL_POST_RECORDS':
      console.log('258885885.state-rootReducer', state);
      return {...state, post_records: action.payload};
    default:
      console.log('3.state-default', state);
      return state;
  }
};

export default postRecordReducer;