import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      type: 'ui-b-container',
      attr: {
        fluid: true
      },
      children: [
        {
          type: 'ui-section',
          children: [
            {
              type: 'ui-section',
              children: [
                {
                  type: 'ui-section'
                },
                {
                  type: 'ui-section'
                }
              ]
            },
            {
              type: 'ui-section',
              children: [
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "primary",
                    title: "Button 1"
                  },
                },
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "info",
                    title: "Button 2"
                  },
                }
              ]
            },
            {
              type: 'ui-section',
              children: [
                {
                  type: 'ui-section'
                },
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  attr: {
                    style: "success",
                    title: "Muh"
                  },
                }
              ]
            },
            {
              type: 'ui-section'
            },
            {
              type: 'ui-section'
            }
          ]
        }
      ]
    });
  }

});
