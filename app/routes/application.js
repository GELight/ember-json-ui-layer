import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model() {
    
    return this.get('store').findRecord('ui-page', 'index');
    
    /*
    return Ember.RSVP.hash({
      type: 'ui-b-layout-container',
      fluid: false,
      children: [
        {
          type: 'ui-layout-section',
          children: [
            {
              type: 'ui-b-layout-grid-row',
              children: [
                {
                  type: 'ui-b-layout-grid-col',
                  col: 'col-md-6',
                  children: [
                    {
                      type: 'ui-b-alert',
                      message: 'This an <strong>alert message</strong> with html...',
                      cssClass: 'alert alert-warning',
                      children: [
                        {
                          type: 'ui-b-button',
                          cssClass: "btn btn-primary",
                          title: "Button 1"
                        }
                      ]
                    },
                    {
                      type: 'ui-b-button',
                      cssClass: "btn btn-primary",
                      title: "Button 123",
                    }
                  ]
                },
                {
                  type: 'ui-b-layout-grid-col',
                  col: 'col-md-6',
                  children: [
                    {
                      type: 'ui-b-button',
                      cssClass: "btn btn-success",
                      title: "Muh"
                    },
                    {
                      type: 'ui-article',
                      cssClass: "alert alert-success",
                      header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                      intro: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
    */

  }

});
