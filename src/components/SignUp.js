import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/users';

function SubmitTest(values, dispatch) {
  console.log(values);
  return dispatch(signUpUser(values)).then((response) => {
    if (response.error) {
      dispatch(signUpUserFailure(response.payload.data));
    }
    sessionStorage.setItem('username', response.payload.data.username);
    dispatch(signUpUserSuccess(response.payload.data));
  });
}
const renderField = ({ input,label,type }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control"/>
  </div>
);

class SignUp extends React.Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(SubmitTest)}>
        <Field name="firstname" type="text" component={renderField} label="Firstname" />
        <Field name="lastname" type="text" component={renderField} label="Lastname" />
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <Field name="email" type="email" component={renderField} label="Example@gmail.com" />
        <Field name="avatar" type="text" component={renderField} label="Your profile src" />
        <Field name="admincode" type="text" component={renderField} label="for admin only" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignUp' // a unique identifier for this form
})(SignUp);