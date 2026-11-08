// Example payment config for local development.
const CONFIG = {
  PAYMENT_API_KEY: 'replace-me',
  PAYMENT_URL: 'https://payments.example.com/v1'
};

if (typeof module !== 'undefined') {
  module.exports = { CONFIG };
}
