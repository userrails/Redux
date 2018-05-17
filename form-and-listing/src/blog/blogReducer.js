const initialState = {
  blogs: [{id: '1001', title: 'Default value'}]
};

const blogReducer = (state=initialState, action) => {
  console.log('1. blog reducer is running');
  switch(action.type) {
    case 'ADD_BLOG':
      console.log('2.state-rootReducer', state);
      return {...state, blogs: [...state.blogs, action.payload]};
    default:
      console.log('3.state-default', state);
      return state;
  }
};

export default blogReducer;