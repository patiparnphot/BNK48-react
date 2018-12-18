import React from 'react';
import Forgot from '../containers/Forgot.js';
import Header from '../containers/Header.js';

export default class forgot extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <Forgot />
        </div>
      </div>
    );
  }
}
