// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה

function maxTickets(isMember) {
  return !!isMember ? 6 : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  const limit = maxTickets(!!isMember);
  if (!Number.isInteger(qty) || qty < 1 || qty > limit) return null;

  const memberDiscount = !!isMember ? 0.2 : 0;
  const studentDiscount = !!isStudent ? 0.15 : 0;
  const discount = Math.max(memberDiscount, studentDiscount);
  const discountedTicket = TICKET_PRICE * (1 - discount);
  return qty * (discountedTicket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, maxTickets, calcTotal };
}
