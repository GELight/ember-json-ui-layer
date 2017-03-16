import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://localhost:4200',

  suffix: '.json',

  headers: {
    'content-type': 'application/json',
    'data-type': 'application/json'
  },

  pathForType: function(modelName) {
    var decamelized = Ember.String.decamelize(modelName);
    return Ember.String.pluralize(decamelized) + this.get('suffix');
  }  
  
});
