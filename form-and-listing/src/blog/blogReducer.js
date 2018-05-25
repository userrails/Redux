const initialState = {
  blogs: [{id: '1001', title: 'Default value'}]
};

const blogReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_BLOG':
      return {...state, blogs: [...state.blogs, action.payload]};
    default:
      return state;
  }
};

export default blogReducer;
