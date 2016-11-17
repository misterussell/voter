import React from 'react';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" method="post">
        <input type="text" name="first-name" placeholder="First Name" value="" />
        <input type="text" name="last-name" placeholder="Last Name" value="" />
        <input type="email" name="email" placeholder="Email" value="" />
        <input type="password" name="pw" value="" />
        <input type="password" name="confirm-pw" value="" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
});
