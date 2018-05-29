import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  LoginAction  from './LoginAction';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength5 = maxLength(50)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(10)

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

class LoginForm extends Component {
  onSubmit(values, dispatch) {
    dispatch(LoginAction(values));
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form model="login_form" onSubmit={handleSubmit(this.onSubmit)} className="form-inline">
        <div class="row">
          <div class="form-group">
            <p>
              <label htmlFor="Email">Email</label>
            </p>
            <Field name="email" component="input" type="text" component={renderField} validate={[required, maxLength5, minLength2]} />
          </div>
        </div>

        <div class="row">
          <p>
            <label htmlFor="password">Last name:</label>
          </p>
          <div class="form-group">
            <Field name="password" component="input" type="text" />
          </div>
        </div>

        <br />

        <div class="row">
          <button type="submit" class="btn btn-sm btn-success">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login_form'
})(LoginForm)

export default LoginForm;
