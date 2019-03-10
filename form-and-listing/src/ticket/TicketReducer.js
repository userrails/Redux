const initialState = {
  ticket_list: [
    {id: 1, title: 'Trip DHN-KTM'}
  ]
}

const ticketReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return {...state, ticket_list: [...state.ticket_list, action.payload]}
    default:
      return state
  }
}

export default ticketReducer;