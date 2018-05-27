import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { createIdol, createIdolSuccess, createIdolFailure } from '../actions/idols';

function SubmitTest(values, dispatch) {
  console.log(values);
  return dispatch(createIdol(values)).then((response) => {
    !response.error ? dispatch(createIdolSuccess(response.payload.data)) : dispatch(createIdolFailure(response.payload.data));
  });
}
const renderField = ({ input,label,type }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control"/>
  </div>
);

class ShareIdol extends React.Component {
  componentWillMount() {
    this.props.resetMe();
  }
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(SubmitTest)}>
        <Field name="firstname" type="text" component={renderField} label="firstname" />
        <Field name="lastname" type="text" component={renderField} label="lastname" />
        <Field name="nickname" type="text" component={renderField} label="nickname" />
        <Field name="aka" type="text" component={renderField} label="aka" />
        <Field name="birthday" type="text" component={renderField} label="birthday" />
        <Field name="height" type="number" component={renderField} label="height" />
        <Field name="bloodgroup" type="text" component={renderField} label="bloodgroup" />
        <Field name="address" type="text" component={renderField} label="address" />
        <Field name="favcolor" type="text" component={renderField} label="favcolor" />
        <Field name="favfood" type="text" component={renderField} label="favfood" />
        <Field name="hobby" type="text" component={renderField} label="hobby" />
        <Field name="lang" type="text" component={renderField} label="lang" />
        <Field name="university" type="text" component={renderField} label="university" />
        <Field name="highschool" type="text" component={renderField} label="highschool" />
        <Field name="description" type="text" component={renderField} label="description" />
        <Field name="image" type="text" component={renderField} label="image" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ShareIdol' // a unique identifier for this form
})(ShareIdol);