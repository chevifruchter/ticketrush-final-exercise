// רשימת המתנה למכירה מוקדמת
function joinWaitlist(list, email) {
  const normalized = String(email || '').trim().toLowerCase();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  if (!valid) return [...list];
  if (list.includes(normalized)) return [...list];
  return [...list, normalized];
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
