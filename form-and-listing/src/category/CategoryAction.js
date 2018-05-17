import {ADD_CATEGORY} from '.././store/actionTypes';

export function CategoryAction(category) {
  return {
    type: ADD_CATEGORY,
    payload: category
  }
}