const initialState = {
  posts: [{id: '1001', title: 'Default value'}]
};

const postReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      return {...state, posts: [...state.posts, action.payload]};
    default:
      return state;
  }
};

export default postReducer;
