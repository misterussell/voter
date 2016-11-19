import React from 'react';

export default React.createClass({
  render() {
    return <button onClick={this.handleClick}>Vote</button>;
  },
  handleClick(e) {
    e.preventDefault();
    this.props.callBack();
  }
});
