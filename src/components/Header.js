import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  
  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetPage();
  }

  componentDidMount(){
    this.props.loadUserFromPage();
  }
  
  renderMemberNav(user) {
    if(user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={"/users/" + user.userId}>Signed In As {user.username}</Link></li>
          <li><a role="button" href="#" onClick={this.props.signOut}>SignOut</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signin">SignIn</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      );
    }
  }
  
  render() {
    
    const { user } = this.props.member;
    
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">BNK48APP</Link>
          </div>
          <div className="collapse navbar-collapse">
            {this.renderMemberNav(user)}
          </div>
        </div>
      </nav>
    );
  }
}