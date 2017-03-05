import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      type: 'ui-b-container',
      props: {
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
                  props: {
                    style: "primary",
                    title: "Button 1"
                  },
                },
                {
                  type: 'ui-b-button',
                  props: {
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
                  props: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  props: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  props: {
                    style: "success",
                    title: "Muh"
                  },
                },
                {
                  type: 'ui-b-button',
                  props: {
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
