import React, { Component } from 'react';
import IdolsList from '../containers/IndexPage.js';
import Header from '../containers/Header.js';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div classname="container">
          <IdolsList />
        </div>
      </div>
    );
  }
}


export default IndexPage;