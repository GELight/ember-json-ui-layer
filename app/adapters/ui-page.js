import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  findRecord: function(store, type, id, snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      
      let url = `/${type.modelName}/${id}`;
      
      Ember.$.getJSON(url).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });

    });
  }

});
