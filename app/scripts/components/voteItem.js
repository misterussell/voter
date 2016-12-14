import React from 'react';

export default React.createClass({
  render(){
    let image = <img src={this.props.info.bandImage} className="band-image"/>;
    if (this.props.info.bandImage === '') { image = null; }
    return (
      <li>
      <h3 className="band-title">{this.props.info.bandName}</h3>
        {image}
      <h4>Votes: {this.props.info.votes}</h4>
      </li>
    );
  }
});
