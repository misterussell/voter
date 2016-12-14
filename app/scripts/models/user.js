import $ from 'jquery';
import Backbone from 'backbone';
import { hashHistory } from 'react-router';

import router from '../router';

import store from '../store';

export default Backbone.Model.extend({
  idAttribute: '_id',
  register(firstName, lastName, email, password, confirmPW) {
    if ( password === confirmPW ) {
      let name = firstName + lastName;
      this.save(
        {email, password, name},
        {
          url: 'https://api.backendless.com/v1/users/register',
          success: (response) => {
            this.login(email, password);
          },
          error: (response) => {
            console.log('User data not saved to server.');
          }
        }
      );
    } else {
      alert('Passwords do not match');
    }
  },
  login(login, password) {
    this.save(
      {login, password},
      {
        url: 'https://api.backendless.com/v1/users/login',
        success: (response) => {
          console.log('Successfuly logged in.');
          window.localStorage.setItem('user-token', response.get('user-token'));
          window.localStorage.setItem('userName', response.get('userName'));
          window.localStorage.setItem('ownerId', response.get('ownerId'));
          store.session.set({authenticated: true});
          hashHistory.push('search');
        },
        error: function(response) {
          alert('Log in not successful. Please try again.');
        }
    });
  },
  logout() {
    $.ajax({
			url: 'https://api.backendless.com/v1/users/logout',
			success: () => {
				this.clear();
				window.localStorage.clear();
        store.session.set({authenticated: false});
			}
		});
  }
});
