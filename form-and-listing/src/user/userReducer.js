const initialState = {
  user: {first_name: 'xxx', last_name: 'yyy'}
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, user: [...state.user, action.payload]};
    default:
      console.log('3.state-default', state);
      return state;
  }
};

export default userReducer;