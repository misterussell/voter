import $ from 'jquery';
import Backbone from 'backbone';

import Band from '../models/band';

export default Backbone.Collection.extend({
  parse(response) {
    return response.artists;
  },
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
               this.set(response);
              //  this.add(response);
           }
       });
  },
  vote() {
    //the vote will need to post to the server
    //get the band's id and name and picture and save these

  },
  listVotes() {
    //this get request will need to load all band data from the server
    
  }
});
