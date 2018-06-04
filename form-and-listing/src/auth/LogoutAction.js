import { connect } from "react-redux";
import { push } from "react-router-redux";

import { LOGOUT } from '../actionTypes';

const LogoutAction = () => {
  return {
    type: LOGOUT
  }
}

// Action Creator
export const LogoutFunction = () => {
  return dispatch => {
    localStorage.removeItem('jwt');
    dispatch(LogoutAction());
    dispatch(push('/login'))
  }
}
