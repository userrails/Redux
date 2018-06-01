const initialState = {
  is_Authenticated: true
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      localStorage.removeItem('jwt');
      return { ...state, is_Authenticated: false };
    default:
      return state;
  }
};

export default logoutReducer;
