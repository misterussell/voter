import React from 'react';

import Button from './button';

import store from '../store';

export default React.createClass({
  render() {
    let image = null;
    if (this.props.info.images.length > 0) {
      image = <img src={this.props.info.images[0].url} width="100px" height="100px"/>;
    }
    return (
      <li>
        {image}
        <h3>{this.props.info.name}</h3>
        <Button callBack={this.vote}/>
      </li>
    );
  },
  vote() {
    let bandName = this.props.info.name;
    let bandId = this.props.info.id;
    let image = this.props.info.images[0].url;
    store.bandVotes.vote(bandName, bandId, image);
  }
});

// <img src={this.props.info.images[0].url} width="100px" height="100px"/>
