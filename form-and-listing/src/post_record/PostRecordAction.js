import {GET_ALL_POST_RECORDS} from '../actionTypes';

export default function PostRecordAction(post_records) {
  return {
    type: GET_ALL_POST_RECORDS,
    payload: post_records
  }
}