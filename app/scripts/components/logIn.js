import React from 'react';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" method="post">
        <input type="email" name="email" placeholder="Email" value="" />
        <input type="password" name="pw" value="" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
});
