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
   * @property {object} children Computed property based on property 'content'.
   * @default null
   */
  children: Ember.computed('data', function() {
    let c = this.get('data');

    if (!Ember.isEmpty(c) && !Ember.isEmpty(c.children)) {
      return c.children;
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
   * Set all 
   * 
   * @method didReceiveAttrs
   * @returns none
   */
  didReceiveAttrs() {
    this._super(...arguments);
    
    let attr = this.get('data.attr');

    Ember.$.each(attr, (index, attr) => {
      console.log(index, attr);
      this.set(index, attr);
    });
    
  },
  
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
