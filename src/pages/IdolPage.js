import React, { Component } from 'react';
import IdolPage from '../containers/IdolPage.js';

export default class Idolpage extends Component {
  render() {
    return (
        <IdolPage id={this.props.params.id} />
    );
  }
}