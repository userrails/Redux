const initialState = {
  login_info: {
    email: '',
    password: ''
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_CREATE':
      return { ...state, login_info: [...state.login_info, action.payload] };
    default:
      return state;
  }
};

export default loginReducer;
