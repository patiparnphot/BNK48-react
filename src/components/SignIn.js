import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

function Submit(values, signIn) {
  console.log(values);
  signIn(values);
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
      <div class="container">
        <div class="row">
          <h1 style="text-align: center">Sign Up</h1>
          <div style="width: 30%; margin: 25px auto;">
            <form onSubmit={handleSubmit((values) => {Submit(values, this.props.signIn);})}>
              <Field name="username" type="text" component={renderField} label="Username" />
              <Field name="password" type="password" component={renderField} label="Password" />
              <button type="submit" disabled={ submitting }>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SignIn' // a unique identifier for this form
})(SignIn);