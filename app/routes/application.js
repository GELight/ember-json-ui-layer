import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      components: [
        {
          type: 'section',
          childs: []
        },
        {
          type: 'section',
          childs: []
        }
      ]
    });
  }

});
