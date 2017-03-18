import DS from 'ember-data';

export default DS.Model.extend({
  class: DS.attr('string'),
  attr: DS.attr(),
  children: DS.attr()
});
