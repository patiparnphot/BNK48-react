import React from 'react';
import { Link } from 'react-router';
import App from '../containers/App';

export default class app extends React.Component {
  render() {
    return (
        <App>
          {this.props.children}
        </App>
    );
  }
}
