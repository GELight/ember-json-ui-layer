import Ember from 'ember';

export default Ember.Component.extend({

  /**
   * Defines the general component data of this component
   *
   * @property {object} data
   * @default null
   */
  data: null,
  
  /**
   * Set all component data properties
   * 
   * @method didReceiveAttrs
   * @returns none
   */
  didReceiveAttrs() {
    this._super(...arguments);
    
    let properties = this.get('data');

    Ember.$.each(properties, (index, property) => {
      this.set(index, property);
    });
    
  }

});
