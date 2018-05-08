import { createStore } from 'redux';

// define initial state

const initialState = {
  count: 0
}

// create reducer function that takes two arguments state, action
const reducer = (state=initialState, action) => {
  // console.log('reducer running', action);
  return state;
}

// now create a store
const store = createStore(reducer);

export default store;