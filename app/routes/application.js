import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    
    return Ember.RSVP.hash(
    {
      type: 'ui-b-alert',
      attr: {
        message: 'This an <strong>alert message</strong> with html...',
        cssClass: 'alert alert-danger',
      },
      children: [
        {
          type: 'ui-b-button',
          attr: {
            cssClass: "btn btn-primary",
            title: "Button 1"
          }
        }
      ]
    }
    /*
    {
      type: 'ui-b-layout-container',
      attr: {
        fluid: false
      },
      children: [
        {
          type: 'ui-layout-section',
          children: [
            {
              type: 'ui-b-layout-grid-row',
              children: [
                {
                  type: 'ui-b-layout-grid-col',
                  attr: {
                    col: 'col-md-6'
                  },
                  children: [
                    {
                      type: 'ui-b-alert',
                      attr: {
                        message: 'This an <strong>alert message</strong> with html...',
                        cssClass: 'alert alert-warning',
                      },
                      children: [
                        {
                          type: 'ui-b-button',
                          attr: {
                            cssClass: "btn btn-primary",
                            title: "Button 1"
                          }
                        }
                      ]
                    },
                    {
                      type: 'ui-b-button',
                      attr: {
                        cssClass: "btn btn-primary",
                        title: "Button 123"
                      }
                    }
                  ]
                },
                {
                  type: 'ui-b-layout-grid-col',
                  attr: {
                    col: 'col-md-6'
                  },
                  children: [
                    {
                      type: 'ui-b-button',
                      attr: {
                        cssClass: "btn btn-success",
                        title: "Muh"
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
    */
    );

  }

});
