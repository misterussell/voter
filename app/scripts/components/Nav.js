import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import store from '../store';

export default React.createClass({
  // propTypes : {
  //   authenticated: PropTypes.bool
  // },
  render() {
    let nav;
    { this.props.authenticated ? (
      nav = (
        <nav className="appNav">
          <Link to='/'>Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/votes">View Votes</Link>
          <Link to="/" onClick={this.handleLogout}>Log Out</Link>
        </nav>
        )
      ) : (
      nav = (
        <nav className="appNav">
          <Link to='/'>Home</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
        )
      );
    }
    return <div>{nav}</div>;
  },
  handleLogout(e) {
    e.preventDefault();
    store.user.logout();
  }
});
