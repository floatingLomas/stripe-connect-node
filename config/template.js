'use strict';

// Save this file as `index.js` in this folder with your account's IDs.
// `index.js` is .gitignored so it won't accidentally end up somewhere
// it shouldn't.

module.exports = exports = {
  clientId: 'ca_YOUR_CLIENT_ID', // Your client ID: https://dashboard.stripe.com/account/applications/settings
  secretKey: 'sk_YOUR_SECRET_KEY', // Your secret API KEY: https://dashboard.stripe.com/account/apikeys
  redirectUri: 'http://localhost:3000/connected', // https://dashboard.stripe.com/account/applications/settings

  port: 3000
};
