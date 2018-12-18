import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import {
  signUpUser,
  signUpUserSuccess,
  signUpUserFailure
} from '../actions/users';

function SubmitUser(values, signUp) {
  console.log(values);
  signUp(values);
}

const handleChange = (handler) => ({target: {files}}) => {
  if (files.length) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      handler({file: reader.result, name: files[0].name});
    }
  } else {
    handler({});
  }
}

const renderField = ({
  input,
  input: {onChange, onBlur, value: omitValue, ...inputProps},
  meta: omitMeta,
  ...props,
  label,
  type,
  accept
}) => {
  if ( type == "file" && accept ) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...inputProps} {...props} type={type} className="form-control" accept={accept}
          onChange={handleChange(onChange)} onBlur={handleChange(onBlur)}/>
      </div>
    )
  } else {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type={type} placeholder={label} className="form-control"/>
      </div>
    )
  }
};

class SignUp extends React.Component {
  
  renderDisplayPicture() {
    if (this.displayPicture) {
      console.log(this.displayPicture);
      return (<img src={ this.displayPicture } style="width: 100%" />);
    }
  }
  
  render() {
    const {handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit((values) => {SubmitUser(values,this.props.signUp);})}>
        <Field name="firstname" type="text" component={renderField} label="Firstname" />
        <Field name="lastname" type="text" component={renderField} label="Lastname" />
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <Field name="email" type="email" component={renderField} label="Example@gmail.com" />
        {this.renderDisplayPicture()}
        <Field name="avatar" type="file" component={renderField} label="Your profile pic"
        accept="image/*" />
        <Field name="admincode" type="text" component={renderField} label="for admin only" />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignUp' // a unique identifier for this form
})(SignUp);