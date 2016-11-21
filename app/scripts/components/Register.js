import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" onSubmit={this.handleSubmit}>
        <input type="text" ref="firstName" id="first-name" placeholder="First Name" />
        <input type="text" ref="lastName" id="last-name" placeholder="Last Name" />
        <input type="email" ref="email" id="email" placeholder="Email" />
        <input type="password" ref="pw" id="pw" placeholder="******" />
        <input type="password" ref="confirmPW" id="confirm-pw" placeholder="******" />
        <input type="submit" id="submit" value="Submit" />
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.refs.irstName.value;
    let lastName = this.refs.lastName.value;
    let email = this.refs.email.value;
    let password = this.refs.pw.value;
    let confirmPW = this.refs.confirmPw.value;
    store.user.register(firstName, lastName, email, password, confirmPW);
  }
});
