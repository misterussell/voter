import React from 'react';

import VoteItem from './voteItem';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      bandVotes: []
    };
  },
  componentWillMount() {
    store.bandVotes.fetch();
    store.bandVotes.on('update change', () => {
      this.setState({bandVotes: store.bandVotes.toJSON()});
    });
  },
  render() {
    let list;
    this.state.bandVotes.length === 0 ? (
        list = []
      ) : (
        list = this.state.bandVotes.map((band, i) => {
          return <VoteItem key={i} info={band}/>;
        })
      );
    return (
      <ul className="votes">
        {list}
      </ul>
    );
  }
});
