import React from 'react';
import Reset from '../containers/Reset.js';
import Header from '../containers/Header.js';

export default class reset extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <Reset />
        </div>
      </div>
    );
  }
}
