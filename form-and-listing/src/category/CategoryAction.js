import {ADD_CATEGORY} from '../actionTypes';

export function CategoryAction(category) {
  return {
    type: ADD_CATEGORY,
    payload: category
  }
}