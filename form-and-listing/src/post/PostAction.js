import {ADD_POST} from '../actionTypes';

export function PostAction(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}