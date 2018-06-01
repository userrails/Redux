const initialState = {
  login_info: {
    email: '',
    password: ''
  },
  is_Authenticated: localStorage.getItem('jwt') ? true : false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_CREATE':
      return { ...state, login_info: [...state.login_info, action.payload], is_Authenticated: true };
    case 'LOGOUT':
      return { ...state, is_Authenticated: false };
    default:
      return state;
  }
};

export default loginReducer;
