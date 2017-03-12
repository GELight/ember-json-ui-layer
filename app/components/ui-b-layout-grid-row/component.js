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
   * Defines the css class name to render the element with class "row".
   * 
   * @property cssClass
   * @default row
   */
  cssClass: 'row',
  
  /**
   * Defines all action methods for this component
   *
   * @property {object} actions
   * @default {}
   */
  actions: {

  }

});
