import React, {Component} from 'react';
import TicketList from './TicketList';
import TicketForm from './TicketForm';

class Ticket extends Component {
  render() {
    return (
        <div>
          <TicketForm />
          <TicketList />
        </div>
      )
  }
}

export default Ticket;