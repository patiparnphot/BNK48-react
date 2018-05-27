import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  
  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetPage();
  }

  componentDidMount() {
    this.props.loadUserFromPage();
  }
  
  renderMemberNav(user) {
    if(user) {
      return (
        <ul class="nav navbar-nav navbar-right">
          <li><Link to={"/users/" + user.id}>Signed In As {user.username}</Link></li>
          <li><a role="button" href="#" onClick={this.props.signOut}>SignOut</a></li>
        </ul>
      );
    }
    return (
      <ul class="nav navbar-nav navbar-right">
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    );
  }
  
  render() {
    
    const { user } = this.props.member;
    
    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">BNK48APP</Link>
          </div>
          <div className="navbar">
            {this.renderMemberNav(user)}
          </div>
        </div>
      </nav>
      <div className="container">
        {this.props.children}
      </div>
      <footer key="footer" className="footer">
        <div className="container">
          <p className="text-muted">&copy; BNK48APP 2018 | <Link to="/">Home</Link> | <Link to="/shareidol">Share your Idol</Link></p>
        </div>
      </footer>
      </div>
    );
  }
}