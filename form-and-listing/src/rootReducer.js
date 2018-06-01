import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import blogReducer from './blog/blogReducer';
import categoryReducer from './category/categoryReducer';
import userMemberReducer from './user_member/userMemberReducer';
import userReducer from './user/userReducer';
import { reducer as formReducer } from 'redux-form'
import postRecordReducer from './post_record/postRecordReducer';
import loginReducer from './login/loginReducer';
import logoutReducer from './logout/LogoutReducer';

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer,
  userReducer,
  userMemberReducer,
  form: formReducer,
  postRecordReducer,
  loginReducer,
  logoutReducer
});

export default rootReducer;
