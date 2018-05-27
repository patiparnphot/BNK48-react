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

class Forgot extends React.Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(SubmitTest)}>
        <Field name="email" type="email" component={renderField} label="Example@gmail.com" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Forgot' // a unique identifier for this form
})(Forgot);