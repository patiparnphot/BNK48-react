import React from 'react';
import SignIn from '../containers/SignIn.js';
import Header from '../containers/Header.js';

export default class Signin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="container">
            <div className="row">
              <h1 style="text-align: center">Sign Up</h1>
              <div style="width: 30%; margin: 25px auto;">
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
