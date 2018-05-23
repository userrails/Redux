import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import blogReducer from './blog/blogReducer';
import categoryReducer from './category/categoryReducer';
import userMemberReducer from './user_member/userMemberReducer';
import userReducer from './user/userReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer,
  userReducer,
  userMemberReducer,
  form: formReducer
});

export default rootReducer;