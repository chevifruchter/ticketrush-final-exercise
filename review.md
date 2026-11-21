# Review: Noa's refund calculation

`js/refund.js:8` applies the 90% refund rate to both the ticket price and the non-refundable service fee. As a result, one ticket returns 325.8 instead of 315, and two tickets return 651.6 instead of 630. Calculate the refund from `TICKET_PRICE` only. `node tests/run.js` reproduces both failures in `tests/refund.test.js`.

Noa's implementation was left unchanged, and her branch was not merged into `main`.
