import {ADD_BLOG} from '../.././store/actionTypes';

export function addBlogAction(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  }
}