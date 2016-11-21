import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" onSubmit={this.handleSubmit}>
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="pw" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('pw').value;
    store.user.login(email, password);
  }
});
