import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <form className="login-signup" onSubmit={this.handleSubmit}>
        <input type="email" ref="email" id="email" placeholder="Email" />
        <input type="password" ref="pw" id="pw" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.pw.value;
    store.user.login(email, password);
  }
});
