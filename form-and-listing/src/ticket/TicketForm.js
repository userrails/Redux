import React, {Component} from 'react';
import {connect} from 'react-redux';
import TicketAction from './TicketAction';
import uuidv1 from 'uuid';

function mapDispatchToProps(dispatch) {
  return {
    onDispatchFormTagSubmit: (ticket) => {dispatch(TicketAction(ticket))}
  }
}

class TicketForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var getTitle = this.refs.title;
    const title = getTitle.value;
    const id =  uuidv1();
    this.setState({id, title});
    this.props.onDispatchFormTagSubmit({id, title});
    this.refs.title.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" ref="title" />
          <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
      )
  }
}

export default connect(null, mapDispatchToProps)(TicketForm);