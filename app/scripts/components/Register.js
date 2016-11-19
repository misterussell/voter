import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" onSubmit={this.handleSubmit}>
        <input type="text" id="first-name" placeholder="First Name" />
        <input type="text" id="last-name" placeholder="Last Name" />
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="pw" placeholder="******" />
        <input type="password" id="confirm-pw" placeholder="******" />
        <input type="submit" id="submit" value="Submit" />
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pw').value;
    let confirmPW = document.getElementById('confirm-pw').value;
    store.user.register(firstName, lastName, email, password, confirmPW);
  }
});
