import React, {Component} from 'react';
import {connect} from 'react-redux';
import TicketAction from './TicketAction';

function mapStateToProps(state) {
  return {
    ticket_props: state.TicketReducer.ticket_list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    beforeComponentLoad: (ticketRec) => {dispatch(TicketAction(ticketRec))}
  };
};

class TicketList extends Component {
  componentDidMount() {
    let ticketData = {id: 2, title: 'another record added'};
    this.props.beforeComponentLoad(ticketData);
  }

  render() {
    if (this.props.ticket_props) {
      return (
        <ul>
        {this.props.ticket_props.map(ticket => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
        </ul>  
      )
    }
   else {
    return (
      <ul>
        <li>OOPS! No record exists!!</li>
      </ul>
      )
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);