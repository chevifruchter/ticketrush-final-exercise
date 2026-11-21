const assert = require('assert');
const { joinWaitlist } = require('../js/waitlist');

test('adds a trimmed lowercase email without mutating the original list', function () {
  const original = ['first@example.com'];
  const updated = joinWaitlist(original, '  NEW@Example.COM  ');

  assert.notStrictEqual(updated, original);
  assert.deepStrictEqual(original, ['first@example.com']);
  assert.deepStrictEqual(updated, ['first@example.com', 'new@example.com']);
});

test('invalid emails return an unchanged copy', function () {
  const original = ['first@example.com'];

  const missingAt = joinWaitlist(original, 'not-an-email');
  const missingDot = joinWaitlist(original, 'user@example');
  assert.notStrictEqual(missingAt, original);
  assert.notStrictEqual(missingDot, original);
  assert.deepStrictEqual(missingAt, original);
  assert.deepStrictEqual(missingDot, original);
});

test('existing emails are not added again regardless of case or surrounding spaces', function () {
  const original = ['  User@Example.com  '];
  const updated = joinWaitlist(original, ' user@example.com ');

  assert.notStrictEqual(updated, original);
  assert.deepStrictEqual(updated, original);
});
