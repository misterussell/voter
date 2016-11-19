import Backbone from 'backbone';

export default Backbone.Model.extend({
  initialize(response) {
    this.set(this.parse(response));
  },
  idAttribute: 'id',
  parse (data) {
    // console.log(data.artists);
    return data;
  }
});
