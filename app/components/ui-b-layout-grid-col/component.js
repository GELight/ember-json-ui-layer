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
  cssClass: 'col',
  
  /**
   * Defines all action methods for this component
   *
   * @property {object} actions
   * @default {}
   */
  actions: {

  }

});
