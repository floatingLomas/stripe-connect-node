'use strict';

var CONFIG = require('./config');

var express = require('express');

var app = express();

var stripe = require('stripe')(CONFIG.secretKey);

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

var OAuthClient = require('client-oauth2');

var oauth = new OAuthClient({
    clientId: CONFIG.clientId,
    clientSecret: CONFIG.secretKey,
    redirectUri: CONFIG.redirectUri,
    authorizationUri: 'https://connect.stripe.com/oauth/authorize',
    accessTokenUri: 'https://connect.stripe.com/oauth/token',
    scopes: ['read_write']
});

// Get
app.get('/', function(req, res) {
    res.render('index', {
        config: CONFIG
    });
});

app.get('/connected', function(req, res) {
    if (req.query.error) return renderError(res, req.query.error);

    oauth.code.getToken(req.url)
        .then(function(token) {
            var accountId = token.data.stripe_user_id;

            stripe.account.retrieve(accountId, function(error, account) {
                res.render('connected', {
                    error: error,
                    account: account
                });
            });
        });
});

app.listen(CONFIG.port, function() {
    console.log('Listening on port', CONFIG.port);
});

function renderError(response, error) {
    response.render('connected', {
        error: error
    });
}
