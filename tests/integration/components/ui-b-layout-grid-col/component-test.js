import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-b-layout-grid', 'Integration | Component | ui b layout grid', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-b-layout-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-b-layout-grid}}
      template block text
    {{/ui-b-layout-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
