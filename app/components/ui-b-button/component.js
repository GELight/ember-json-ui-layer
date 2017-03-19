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
   * @default ''
   */
  cssClass: '',
  
  /**
   * Defines a target route by click on the button
   * 
   * @property transition
   * @default null
   */
  transition: null,

  /**
   * Defines all action methods of this component
   * 
   * @property actions
   * @default {}
   */
  actions: {
    
  }
  
});
