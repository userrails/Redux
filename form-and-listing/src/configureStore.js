import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk), composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

console.log("store-get-state", store.getState());

export default store;