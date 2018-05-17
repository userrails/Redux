import {ADD_POST} from '.././store/actionTypes';

export function PostAction(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}