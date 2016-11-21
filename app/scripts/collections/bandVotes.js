import $ from 'jquery';
import Backbone from 'backbone';
import Band from '../models/band';

export default Backbone.Collection.extend({
  model: Band,
  url: 'https://api.backendless.com/v1/data/Bands',
  vote(bandName, bandId, bandImage) {
    //the vote will need to post to the server
    //get the band's id and name and picture and save these
    //conditional statement for finding whether a band is already in the system
    this.fetch();;
    this.on('update change', () => {
      this.models.filter((model, i) => {
        model.get('bandId') === bandId ? (
          $.ajax({
            type: 'PUT',
            url: `https://api.backendless.com/v1/data/Bands/${model.get('objectId')}`
          })
        ) : (
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
          })
        )
      });
    });
  },
  parse(data) {
    let bands = data.data;
    return bands;
  }
});
