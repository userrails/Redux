import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history)),
));

export default store;
