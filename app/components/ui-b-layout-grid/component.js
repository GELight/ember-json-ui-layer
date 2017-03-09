import uiBase from './../ui-base/component';

export default uiBase.extend({

  tagName: '',
  
  /**
   * Defines a flag to render a element with class "row".
   * 
   * @property row
   * @default null
   */
  row: null,

  /**
   * Defines the css class for the grid column.
   * 
   * @property col
   * @default col
   */
  col: 'col',

  /**
   * Set all 
   * 
   * @method didReceiveAttrs
   * @returns none
   */
  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('row')) {
      this.set('classNames', ['row']);
    }

  },

  /**
   * Defines all action methods for this component
   *
   * @property {object} actions
   * @default {}
   */
  actions: {

  }

});
