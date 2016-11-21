import React from 'react';

import Nav from './Nav';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      authenticated: store.session.get('authenticated')
    };
  },
  componentWillMount() {
    store.session.on('update change', () => {
      this.setState({authenticated: store.session.get('authenticated')});
    });

  },
  render() {
    return (
      <div>
        <Nav authenticated={this.state.authenticated} />
        {this.props.children}
      </div>
    );
  }

});
