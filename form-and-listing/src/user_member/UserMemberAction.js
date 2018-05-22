import {ADD_USER_MEMBER} from '../actionTypes';

export function UserMemberAction(user_member) {
  return {
    type: ADD_USER_MEMBER,
    payload: user_member
  }
}