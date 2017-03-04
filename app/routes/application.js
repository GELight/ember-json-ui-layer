import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      type: 'ui-b-container',
      fluid: true,
      childs: [
        {
          type: 'ui-section',
          childs: [
            {
              type: 'ui-section',
              childs: [
                {
                  type: 'ui-section',
                  childs: []
                },
                {
                  type: 'ui-section',
                  childs: []
                }
              ]
            },
            {
              type: 'ui-section',
              childs: []
            },
            {
              type: 'ui-section',
              childs: [
                {
                  type: 'ui-section',
                  childs: []
                }
              ]
            },
            {
              type: 'ui-section',
              childs: []
            },
            {
              type: 'ui-section',
              childs: []
            }
          ]
        }
      ]
    });
  }

});
