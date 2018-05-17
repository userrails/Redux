import {ADD_POST} from '../.././store/actionTypes';

export function addPostAction(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

// another syntax would be using pointer function
// export const addPostAction = (post) => ({type: ADD_POST, payload: post});