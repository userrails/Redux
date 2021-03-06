import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import blogReducer from './blog/blogReducer';
import categoryReducer from './category/categoryReducer';
import userMemberReducer from './user_member/userMemberReducer';
import userReducer from './user/userReducer';
import { reducer as formReducer } from 'redux-form'
import postRecordReducer from './post_record/postRecordReducer';
import authReducer from './auth/authReducer';
import TicketReducer from './ticket/TicketReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  postReducer,
  blogReducer,
  categoryReducer,
  userReducer,
  userMemberReducer,
  form: formReducer,
  postRecordReducer,
  authReducer,
  TicketReducer,
  router: routerReducer
});

export default rootReducer;
