import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ui-component', 'Unit | Model | ui component', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
