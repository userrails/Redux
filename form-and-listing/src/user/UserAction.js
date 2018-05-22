import {ADD_USER} from '../actionTypes';

export function UserAction(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}