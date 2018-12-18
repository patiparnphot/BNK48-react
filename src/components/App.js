import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <p>app dev verision 1.0.15</p>
        {this.props.children}
        <footer key="footer" className="footer">
            <div className="container">
              <p className="text-muted">&copy; BNK48APP 2018 | <Link to="/">Home</Link> | <Link to="/shareidol">Share your Idol</Link></p>
            </div>
        </footer>
      </div>
    );
  }

}