'use strict';

var CONFIG = require('./config');

var app = require('./lib/server');
var stripe = require('stripe')(CONFIG.secretKey);
var OAuth = require('client-oauth2');

// Configure the OAuth 2.0 Client
var oauth = new OAuth({
    clientId: CONFIG.clientId,
    clientSecret: CONFIG.secretKey,

    scopes: ['read_write'],

    redirectUri: CONFIG.redirectUri,
    authorizationUri: 'https://connect.stripe.com/oauth/authorize',
    accessTokenUri: 'https://connect.stripe.com/oauth/token'
});

// Get the home page:
app.get('/', function(req, res) {
    res.render('index', {
        redirectUri: oauth.code.getUri()
    });
});

// Handle the redirect - this should match your CONFIG redirect's path:
app.get('/connected', function(req, res) {
    if (req.query.error) return response.render('connected', {
        error: req.query.error
    });

    // Use the Authorization Code to get a Token
    oauth.code.getToken(req.url).then(handleToken);

    // Go fetch the Account from the Token
    function handleToken(token) {
        stripe.account.retrieve(token.data.stripe_user_id, onAccount);
    }

    // Render the Account information
    function onAccount(error, account) {
        res.render('connected', {
            error: error,
            account: account
        });
    }
});

app.listen(CONFIG.port, function() {
    console.log('Listening on port', CONFIG.port);
});
