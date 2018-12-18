import React, { Component } from 'react';
import IdolPage from '../containers/IdolPage.js';
import Header from '../containers/Header.js';

export default class Idolpage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <IdolPage id={this.props.params.id} />
        </div>
      </div>
    );
  }
}