import { SESSION_CREATE } from '../actionTypes';

export default function LoginAction(login_info) {
  return {
    type: SESSION_CREATE,
    payload: login_info
  }
}
