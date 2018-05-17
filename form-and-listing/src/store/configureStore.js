import { createStore } from 'redux';
import { combineReducers } from 'redux';
import postReducer from '../post/postReducer';
import blogReducer from '../blog/blogReducer';
import categoryReducer from '../category/categoryReducer';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

console.log("store-get-state", store.getState());

export default store;