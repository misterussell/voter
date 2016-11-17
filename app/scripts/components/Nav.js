import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="appNav">
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Log In</Link>
          <Link to="/search">Search</Link>
          <Link to="/votes">View Votes</Link>
        </nav>
        // {this.props.children}
      </div>
    );
  }
});

// pass in {this.props.children} under nav once components are made
