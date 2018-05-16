import {ADD_BLOG} from '../.././store/blogs/actionTypes';

export function addBlogAction(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  }
}