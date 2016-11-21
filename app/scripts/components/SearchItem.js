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
    let bandName = this.props.info.name;
    let bandId = this.props.info.id;
    let image = this.props.info.images[0].url;
    store.bands.vote(bandName, bandId, image);
  }
});
