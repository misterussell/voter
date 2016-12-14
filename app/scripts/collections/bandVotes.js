import $ from 'jquery';
import Backbone from 'backbone';
import Band from '../models/band';
import { hashHistory } from 'react-router';

export default Backbone.Collection.extend({
  model: Band,
  url: 'https://api.backendless.com/v1/data/Bands',
  vote(bandName, bandId, bandImage) {
    //the vote will need to post to the server
    //get the band's id and name and picture and save these
    //conditional statement for finding whether a band is already in the system
    this.fetch({
      success: (response) => {
        let votes, duplicate, foundBand;
        //loops over current data in server to verify if band has already been voted for
        this.models.forEach((model) => {
          if (model.get('bandId') === bandId) {
          votes = Number(model.get('votes'));
          duplicate = model.get('objectId');
          foundBand = true;
          }
        });

      foundBand ? (
        votes += 1,
        $.ajax({
          type: 'PUT',
          url: `https://api.backendless.com/v1/data/Bands/${duplicate}`,
          contentType: 'application/json',
          data: JSON.stringify({votes: `${votes}`}),
          success: (response) => {
            window.console.log('Vote Updated');
            hashHistory.push('votes');
          },
          error: (response) => {
            window.console.log('Vote not updated');
          }
        })
      ) : (
        $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/data/Bands',
          contentType: 'application/json',
          data: JSON.stringify({bandName, bandId, bandImage}),
          success: (response) => {
            window.console.log('Vote added.')
            foundBand = false;
          },
          error: (response) => {
            window.console.log('Error. Not added');
          }
        })
      );
      }
    });
  },
  parse(data) {
    let bands = data.data;
    return bands;
  }
});
