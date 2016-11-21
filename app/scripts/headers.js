import $ from 'jquery';

import keys from './keys';

export default function() {

return $(document).ajaxSend((evt, xhr, settings) => {
	if (
		settings.url === 'https://api.backendless.com/v1/users/register' ||
		settings.url === 'https://api.backendless.com/v1/users/login' ||
		settings.url === 'https://api.backendless.com/v1/users/logout' ||
		settings.url === 'https://api.backendless.com/v1/data/Bands'
	) {
		console.log('intercepted');
		xhr.setRequestHeader('application-id', keys.appId);
		xhr.setRequestHeader('secret-key', keys.secret);
		xhr.setRequestHeader('application-type', 'REST');
		// if (session.get('user-token')) {
		if (window.localStorage['user-token']) {
			xhr.setRequestHeader('user-token', window.localStorage['user-token']);
		}
	}
});

}
