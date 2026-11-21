// רשימת המתנה למכירה מוקדמת
function joinWaitlist(list, email) {
  const normalized = String(email || '').trim().toLowerCase();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  if (!valid) return [...list];
  const alreadyJoined = list.some(function (entry) {
    return typeof entry === 'string' && entry.trim().toLowerCase() === normalized;
  });
  if (alreadyJoined) return [...list];
  return [...list, normalized];
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
