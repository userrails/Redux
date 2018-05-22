const initialState = {
  user_member: {first_name: 'xxx', last_name: 'yyy'}
};

const userMemberReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_USER_MEMBER':
      return {...state, user_member: action.payload};
    default:
      return state;
  }
};

export default userMemberReducer;