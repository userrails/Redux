import { createStore } from 'redux';
import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import blogReducer from './blog/blogReducer';
import categoryReducer from './category/categoryReducer';

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer
});

export default rootReducer;