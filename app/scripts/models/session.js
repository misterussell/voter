import Backbone from 'backbone';
import { hashHistory } from 'react-router';

export default Backbone.Model.extend({
  initialize() {
    if (window.localStorage['user-token']) {
			this.set({authenticated: true, 'user-token': window.localStorage['user-token']});
      hashHistory.push('/search');
		}
  },
  defaults: {
    authenticated: false,
    'user-token': ''
  }
});
