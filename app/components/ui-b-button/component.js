import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  actions: {

    click() {
      this.set('data.props.title', 'clicked...');
    }

  }

});
