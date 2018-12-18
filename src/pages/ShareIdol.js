import React from 'react';
import ShareIdol from '../containers/ShareIdol.js';
import Header from '../containers/Header.js';

export default class Shareidol extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <ShareIdol />
        </div>
      </div>
    );
  }
}
