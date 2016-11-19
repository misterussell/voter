import React from 'react';

import SearchItem from './SearchItem';

export default React.createClass({
  render() {
    let list;
    { this.props.results[0] === undefined ? (
        list = ''
      ) : (
        list = this.props.results[0].artists.items.map((band, i) => {
          return <SearchItem key={i} info={band} />;
        })
      );
    }
    return (
      <ul>
        {list}
      </ul>
    );
  }
});
