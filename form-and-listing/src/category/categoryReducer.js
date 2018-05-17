const initialState = {
  categories: [{id: '1001', title: 'Default value'}]
};

const categoryReducer = (state=initialState, action) => {
  console.log('1. category reducer is running');
  switch(action.type) {
    case 'ADD_CATEGORY':
      console.log('2.state-rootReducer', state);
      return {...state, categories: [...state.categories, action.payload]};
    default:
      console.log('3.state-default', state);
      return state;
  }
};

export default categoryReducer;