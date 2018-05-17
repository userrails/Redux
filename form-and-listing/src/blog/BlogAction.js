import {ADD_BLOG} from '../actionTypes';

export function BlogAction(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  }
}