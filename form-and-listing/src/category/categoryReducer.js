const initialState = {
  categories: [{id: '1001', title: 'Default value'}]
};

const categoryReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_CATEGORY':
      return {...state, categories: [...state.categories, action.payload]};
    default:
      return state;
  }
};

export default categoryReducer;
