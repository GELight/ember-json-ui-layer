import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-b-layout-row', 'Integration | Component | ui b layout row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-b-layout-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-b-layout-row}}
      template block text
    {{/ui-b-layout-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
