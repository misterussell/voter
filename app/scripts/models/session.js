import Backbone from 'backbone';

export default Backbone.Model.extend({
  initialize() {
    if (window.localStorage['user-token']) {
			this.set({authenticated: true, 'user-token': window.localStorage['user-token']});
		}
  },
  defaults: {
    authenticated: false,
    'user-token': ''
  }
});
