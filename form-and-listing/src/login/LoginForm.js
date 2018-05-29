import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  LoginAction  from './LoginAction';

const required = value => (value ? undefined : 'Required');
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength5 = maxLength(50)
// export const minLength = min => value =>
//   value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(10)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined

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
            <Field name="email" component="input" type="email" component={renderField} validate={[required, email]} warn={aol} />
          </div>
        </div>

        <div class="row">
          <p>
            <label htmlFor="password">Password:</label>
          </p>
          <div class="form-group">
            <Field name="password" component="input" type="password" />
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
