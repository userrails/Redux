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

const categories = ['Electronics', 'Clothes', 'Jwellery', 'Stationery', 'Men Wear', 'Women Wear', 'Kitchen utilities']

class UserMemberForm extends Component {
  onSubmit(values, dispatch) {
    dispatch(UserMemberAction(values));
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
          <div class="form-group">
            <label htmlFor="gender">Gender:</label>
            <label>
              <Field name="gender" component="input" type="radio" value="male" /> {' '}
              Male
            </label>

            <label>
              <Field name="gender" component="input" type="radio" value="female" />{' '}
              Female
            </label>
          </div>
        </div>

        <div class="row">
          <label>Categories:</label>

          <div>
            <Field name="category" component="select" className="form-control">
              <option value="">Select Category</option>
              {
                categories.map(cat => (
                  <option value={cat} key={cat}>{cat}</option>
                ))
              }
            </Field>
          </div>
        </div>

        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field name="employed" id="employed" component="input" type="checkbox" />
          </div>
        </div>

        <div>
          <label>Bio</label>
          <div>
            <Field name="bio" component="textarea" />
          </div>
        </div>

        <br/>

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
