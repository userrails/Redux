import {ADD_TICKET} from '../actionTypes.js';

function TicketAction(ticket) {
  return {
    type: ADD_TICKET,
    payload: ticket
  }
}

export default TicketAction;