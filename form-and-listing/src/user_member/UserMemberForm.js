import React, { Component } from 'react';
import { UserMemberAction } from './UserMemberAction';
import { Field, reduxForm } from 'redux-form'

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength5 = maxLength(5)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <p>{error}</p>) ||
          (warning && <p>{warning}</p>))}
    </div>
  </div>
);

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
          <div class="form-group">
            <p>
              <label htmlFor="first_name">First name:</label>
            </p>
            <Field name="first_name" component="input" type="text" component={renderField} validate={[required , maxLength5, minLength2]} />
          </div>
        </div>

        <div class="row">
          <p>
            <label htmlFor="last_name">Last name:</label>
          </p>
          <div class="form-group">
            <Field name="last_name" component="input" type="text" />
          </div>
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