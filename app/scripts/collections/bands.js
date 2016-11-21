import $ from 'jquery';
import Backbone from 'backbone';

import Band from '../models/band';

export default Backbone.Collection.extend({
  model: Band,
  getBands(searchTerm) {
    $.ajax({
           url: 'https://api.spotify.com/v1/search',
           data: {
               q: searchTerm,
               type: 'artist'
           },
           success: (response) => {
               this.reset();
               this.add(response);
           }
       });
  }
});
