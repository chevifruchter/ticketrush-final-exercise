const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive 20% off the ticket price', function () { assertEq(calcTotal(2, true), 584); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('member orders at the limit are accepted', function () { assertEq(calcTotal(6, true), 1752); });
test('member orders above the limit are rejected', function () { assertEq(calcTotal(7, true), null); });
test('students receive 15% off the ticket price', function () { assertEq(calcTotal(2, false, true), 619); });
test('members receive the larger discount when they are also students', function () {
  assertEq(calcTotal(2, true, true), 584);
});
test('the service fee is not discounted', function () {
  assertEq(calcTotal(1, true, true), 292);
  assertEq(calcTotal(1, false, true), 309.5);
});
test('invalid quantities are rejected', function () {
  assertEq(calcTotal(0), null);
  assertEq(calcTotal(1.5), null);
  assertEq(calcTotal(9), null);
});
