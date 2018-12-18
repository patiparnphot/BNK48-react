import React from 'react';
import SignUp from '../containers/SignUp.js';
import Header from '../containers/Header.js';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <SignUp />
        </div>
      </div>
    );
  }
}
