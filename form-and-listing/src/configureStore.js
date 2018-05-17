import {createStore} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

console.log("store-get-state", store.getState());

export default store;