import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  posts: [{id: '1001', title: 'Default value'}]
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      return {...state, posts: [...state.posts, action.payload]};
    default:
      return state;
  }
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;