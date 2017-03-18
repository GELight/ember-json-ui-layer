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
    
    if (!Ember.isEmpty(this.get('data'))) {
      
      // Set all defined properties to the component
      let properties = this.get('data');
      Ember.$.each(properties, (index, property) => {
        this.set(index, property);
      });

      // Set all defined attributes to the component
      if (!Ember.isEmpty(this.get('data.attr'))) {
        let attr = this.get('data.attr');
        Ember.$.each(attr, (index, property) => {
          this.set(index, property);
        });
      }
      
    }
    
  }

});
