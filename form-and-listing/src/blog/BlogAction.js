import {ADD_BLOG} from '.././store/actionTypes';

export function BlogAction(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  }
}