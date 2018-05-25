const initialState = {
  post_records: []
};

const postRecordReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_ALL_POST_RECORDS':
      return {...state, post_records: action.payload};
    default:
      return state;
  }
};

export default postRecordReducer;
