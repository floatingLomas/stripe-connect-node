# A simple Stripe Connect Node demo app

This is a simple Stripe Connect application written in Node.js with Express. At this point it doesn't do a whole lot, and the intention is primarily to provide a general example to help you get up and running with [Stripe Connect](https://stripe.com/docs/connect).  It ~~was totally stolen from~~ is heavily inspired by [A simple PHP Stripe Connect example using OAuth 2]( https://github.com/adamjstevenson/oauth-stripe-connect-php).


<!-- You can find a running demo of this application here: http://159.203.237.86/oauth-stripe-connect-php/  This example uses test credentials, so this platform will only be able to access test data when you connect your account. -->

## Some important things you should know right off the bat

* <strong>This isn't, by any means, ready for production.</strong>
* <strong>You should read over [Stripe's Connect documentation](https://stripe.com/docs/connect/standalone-accounts) as a first step.</strong>
* This example uses [Express](https://expressjs.com/) and [Pug](https://pugjs.org/) to try to keep the actual logic as clear as possible.  In theory I could've chosen any framework, but I'm most familiar with Express, so that's what you got.
* This application uses an OAuth 2.0 client library provided by the [Mulesoft](https://github.com/mulesoft/js-client-oauth2). Though [it's possible](https://stripe.com/docs/connect/standalone-accounts#sample-code) to build the OAuth flow out yourself, it's recommended that you use an OAuth library like this one.
* Since the goal here is just to show the connection process, this application doesn't make use of any database. IRL, you'll want to save at least the account ID to your database when your user connects so you can [do things on their behalf](https://stripe.com/docs/connect/authentication#authentication-via-the-stripe-account-header) later.
* This integration uses [standalone accounts](https://stripe.com/docs/connect/standalone-accounts), so you can either create a new test account using [some test data](https://stripe.com/docs/testing), or connect an existing account.

## Getting started

Clone this repository:

```
git clone https://github.com/floatingLomas/stripe-connect-node.git
```

Log in to your Stripe account (or create one) and register your application as a platform. Set a redirect URI in Stripe that points to https://localhost:3000/connected (or whatever you want to set below).

Copy `config/template.js` to `config/index.js` and add your test secret key, development client ID, redirect URL and the port you want to listen on there.

Run `npm install` from the project's root directory to install dependencies, then `npm start` to get rolling.
