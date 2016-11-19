import React from 'react';

import SearchResults from './SearchResults';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      bands: store.bands.toJSON()
    };
  },
  componentWillMount() {
    store.bands.on('update change', () => {
      this.setState({bands: store.bands.toJSON()});
    });
  },
  render() {
    return (
      <div className="search-box">
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" id="search" />
        <input type="submit" id="submit" value="Submit" />
      </form>
      <SearchResults results={this.state.bands}/>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = document.getElementById('search').value;
    store.bands.getBands(searchTerm);
  }
});
