import uiBase from './../ui-base/component';

export default uiBase.extend({

  /**
   * Removes the ember-view element of the component template
   * 
   * @property tagName
   * @default div
   */
  tagName: '',
  
  /**
   * Defines the css class for the grid column element.
   * 
   * @property cssClass
   * @default col
   */
  cssClass: 'alert alert-danger',

  /**
   * Defines the alert message to be rendered
   * 
   * @property message
   * @default null
   */
  message: null,
  
  /**
   * Defines the alert message as html safe string to be rendered.
   * This is a computed property depends on the "message" property.
   * 
   * @property messageHTMLSafe
   * @default null
   */
  messageHTMLSafe: Ember.computed('message', function() {
    return Ember.String.htmlSafe(this.get('message'));
  }),
  
  /**
   * Defines all action methods for this component
   *
   * @property {object} actions
   * @default {}
   */
  actions: {

  }

});
