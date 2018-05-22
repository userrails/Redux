import { createStore } from 'redux';
import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import blogReducer from './blog/blogReducer';
import categoryReducer from './category/categoryReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer,
  userReducer
});

export default rootReducer;