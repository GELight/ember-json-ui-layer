import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model() {
    let page = this.get('store').findRecord('ui-page', 'application');
    return page;
  }
  
});
