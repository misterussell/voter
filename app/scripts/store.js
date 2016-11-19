import $ from 'jquery';

import User from './models/user';
import Bands from './collections/bands';

export default {
  user: new User(),
  bands: new Bands()
};
