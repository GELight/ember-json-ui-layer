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
   * Defines the css class for the component element.
   * 
   * @property cssClass
   * @default null
   */
  cssClass: null,

  /**
   * Defines the header text for the component element.
   * 
   * @property header
   * @default null
   */
  header: null,

  /**
   * Defines the intro text for the component element.
   * 
   * @property intro
   * @default null
   */
  intro: null,

  /**
   * Defines the article text for the component element.
   * 
   * @property text
   * @default null
   */
  text: null

});
