import $ from 'jquery';

import User from './models/user';
import Bands from './collections/bands';
import BandVotes from './collections/bandVotes';
import Session from './models/session';

export default {
  user: new User(),
  bands: new Bands(),
  bandVotes: new BandVotes(),
  session: new Session()
};
