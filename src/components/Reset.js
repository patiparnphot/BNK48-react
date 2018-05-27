import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

function SubmitTest(values) {
  return console.log(values);
}
const renderField = ({ input,label,type }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control"/>
  </div>
);

class Reset extends React.Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(SubmitTest)}>
        <Field name="newpass" type="password" component={renderField} label="New Password" />
        <Field name="conpass" type="password" component={renderField} label="Confirm Password" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Reset' // a unique identifier for this form
})(Reset);