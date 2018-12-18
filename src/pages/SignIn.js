import React from 'react';
import SignIn from '../containers/SignIn.js';
import Header from '../containers/Header.js';

export default class Signin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <SignIn />
        </div>
      </div>
    );
  }
}
