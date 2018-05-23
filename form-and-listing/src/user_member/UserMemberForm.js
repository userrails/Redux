import React, { Component } from 'react';
import { UserMemberAction } from './UserMemberAction';
import { Field, reduxForm } from 'redux-form'

class UserMemberForm extends Component {
  onSubmit(values, dispatch) {
    dispatch(UserMemberAction(values));
    console.log(values);
  }

  render () {
  const { handleSubmit } = this.props
    return (
      <form model="user_member" onSubmit={handleSubmit(this.onSubmit)} className="form-inline">
        <div class="row">
          <label htmlFor="first_name">First name:</label>
          <Field name="first_name" component="input" type="text" />
        </div>

        <div class="row">
          <label htmlFor="last_name">Last name:</label>
          <Field name="last_name" component="input" type="text" />
        </div>

        <div class="row">
          <button type="submit" class="btn btn-sm btn-success">
            Submit
          </button>  
        </div>
      </form>
    );
  }
}

UserMemberForm = reduxForm({
  // a unique name for the form
  form: 'user_member'
})(UserMemberForm)

export default UserMemberForm;