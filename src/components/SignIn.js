import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { signInUser, signInUserSuccess, signInUserFailure } from '../actions/users';

function SubmitTest(values, dispatch) {
  console.log(values);
  return dispatch(signInUser(values)).then((response) => {
    if (response.error) {
      dispatch(signInUserFailure(response.payload.data));
    }
    sessionStorage.setItem('username', response.payload.data.username);
    dispatch(signInUserSuccess(response.payload.data));
  });
}
const renderField = ({ input,label,type }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control"/>
  </div>
);

class SignIn extends React.Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(SubmitTest)}>
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignIn' // a unique identifier for this form
})(SignIn);