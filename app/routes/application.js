import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      type: 'ui-b-layout-container',
      attr: {
        fluid: true
      },
      children: [
        {
          type: 'ui-layout-section',
          children: [
            {
              type: 'ui-layout-section',
              children: [
                {
                  type: 'ui-b-layout-grid',
                  attr: {
                    col: 'row'
                  },
                  children: [
                    {
                      type: 'ui-b-layout-grid',
                      attr: {
                        col: 'col-md-6'
                      },
                      children: [
                        {
                          type: 'ui-b-button',
                          attr: {
                            style: "info",
                            title: "Button"
                          }
                        }
                      ]
                    },
                    {
                      type: 'ui-b-layout-grid',
                      attr: {
                        col: 'col-md-6'
                      },
                      children: [
                        {
                          type: 'ui-b-button',
                          attr: {
                            style: "info",
                            title: "Button"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
  }

});
