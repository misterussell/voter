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
  vote(bandName, bandId, bandImage) {
    //the vote will need to post to the server
    //get the band's id and name and picture and save these
    console.log(bandName, bandId, bandImage);
    $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/data/Bands',
      contentType: 'application/json',
      data: JSON.stringify({bandName, bandId, bandImage}),
      success: (response) => {
        console.log('Vote added.')
      },
      error: (response) => {
        console.log('Error. Not added');
      }
    });
    // this.set(
    //   {bandName, bandId, bandImage},
    //   {
    //     url: 'https://api.backendless.com/v1/data/Bands',
    //     success: (response) => {
    //       console.log('added to collection');
    //     }
    //   }
    // );
  },
  listVotes() {
    //this get request will need to load all band data from the server

  }
});
