import Ember from 'ember';

export default Ember.Component.extend({

  /**
   * Defines the general content data of this component
   *
   * @property {object} data
   * @default null
   */
  data: null,

  /**
   * Defines the child component list of this component to be render
   *
   * @property {object} childs Computed property based on property 'content'.
   * @default null
   */
  childs: Ember.computed('data', function() {
    let c = this.get('content');
    
    // Set all properties
    if (c && c.props && !Ember.isEmpty(c.props)) {  
      //this.setProperties(c.props);
    }

    if (!Ember.isEmpty(c) && !Ember.isEmpty(c.childs)) {
      return c.childs;
    }

    return null;
  }),

  /**
   * Defines a debugging flag to render some internal component information
   *
   * @property {boolean} debug
   * @default false
   */
  debug: false,
  
  /**
   * Defines all action methods for this component
   *
   * @property {object} actions
   * @default {}
   */
  actions: {

    //...

  }

});
