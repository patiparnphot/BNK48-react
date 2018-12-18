import React from 'react';
import UserProfile from '../containers/UserProfile.js';
import Header from '../containers/Header.js';

export default class Userprofile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <UserProfile />
        </div>
      </div>
    );
  }
}
