import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  posts: [{id: '1001', title: 'Default value'}]
};

const rootReducer = (state=initialState, action) => {
  console.log('1. post reducer is running');
  switch(action.type) {
    case 'ADD_POST':
      console.log('2.state-rootReducer', state);
      return {...state, posts: [...state.posts, action.payload]};
    default:
      console.log('3.state-default', state);
      return state;
  }
};

export default rootReducer;