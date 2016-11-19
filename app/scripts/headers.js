import $ from 'jquery';

import keys from './keys';

export default function(session) {

return $(document).ajaxSend((evt, xhr) => {
	xhr.setRequestHeader('application-id', keys.appId);
	xhr.setRequestHeader('secret-key', keys.secret);
	xhr.setRequestHeader('application-type', 'REST');
	if (session.get('user-token')) {
		xhr.setRequestHeader('user-token', session.get('user-token'));
	}
});

}
