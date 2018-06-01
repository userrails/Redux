import { SESSION_CREATE, GLOBAL_ERROR } from '../actionTypes';
import axios from 'axios';
import { push } from "react-router-redux";

const LoginAction = ({email, password}) => dispatch => {
  return axios
    .post('http://lvh.me:4000/api/user_token', { auth: { email, password } })
    .then(response => {
      localStorage.setItem("jwt", response.data.jwt)

      dispatch({
        type: SESSION_CREATE,
        payload: response.data
      })
      dispatch(push('/'))
    })
    .catch(error => dispatch({ type: GLOBAL_ERROR, payload: error.response.payload}))
}

export default LoginAction
