import React from 'react';

import Button from './button';

import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.info);
    return (
      <li>
        <h3>{this.props.info.name}</h3>
        <Button callBack={this.vote}/>
      </li>
    );
  },
  vote() {
    console.log('testing button callback');
    store.bands.vote();
  }
});
