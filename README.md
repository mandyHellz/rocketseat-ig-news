# IgNews 📄

## About the app

Paid text content subscription platform project with NextJs, Typescript, Sass and third-party api's - authentication, payment and database.
Built during the "Rocketseat Ignite: React Trail" course.

### Requirements

Required to have accounts in the following tools

- Fauna DB
- Stripe
- Prismic CMS

### Stripe CLI webhook integration

To install the Stripe CLI follow the instructions in this link:
https://stripe.com/docs/stripe-cli

To start test the webhooks integration, run the following command:
$ stripe listen --forward-to localhost:3000/stripe_webhooks

### Prismic Slicemachine

To init the slicemachine tool, run the following command:
$ npx @slicemachine/init --repository your-repository

After login, you can run the following command:
$ yarn slicemachine

This command will show you a localhost link on terminal - http://localhost:9999 - where you can create your custom types and slices.
