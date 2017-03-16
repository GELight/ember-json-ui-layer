import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model() {
    
    return this.get('store').findRecord('ui-page', 'index').then((data) => {
      return data;
    }).catch((error) => {
      console.error(error);
    });
    
  }

});
