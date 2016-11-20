import $ from 'jquery';

import User from './models/user';
import Bands from './collections/bands';
import Session from './models/session';

export default {
  user: new User(),
  bands: new Bands(),
  session: new Session()
};
