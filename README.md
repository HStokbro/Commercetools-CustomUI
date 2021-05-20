<p align="center">
  <a href="https://commercetools.com/">
    <img alt="commercetools logo" src="https://unpkg.com/@commercetools-frontend/assets/logos/commercetools_primary-logo_horizontal_RGB.png">
  </a>
</p>

# Custom application

CommerceTools has a small template for building Custom Apps [here](https://github.com/commercetools/merchant-center-application-kit)

It's a Single Page App built with React (hooks), npm & GraphQL.

All CommerceTools components and ui components are built in React, so it is not possible to switch to Vue for instance.

What you get out of the box:
- A way to embed custom functionality inside CommerceTools
- Single Sign On to merchant center
- UI Component building blocks for everything you see in Merchant Center
- Events for things like notifications
- Menu setup & routing
- Internalization
- Jest test setup
- etc.

## Custom application with enhancements

This is that CommerceTools template, but with a lot of enhancements:
- Linting setup
- Prettier setup
- Typescript setup
- Script for GraphQL schema download. See section **Update GraphQL schema**
- Script for auto generation of:
  - Typescript types from GraphQL schema
  - Hooks for easy GraphQL querying and mutation. Just add some GraphQL in `graphql` folder, and you will get an auto generated hook to use in `generated/graphql.tsx`.
  - This auto generation script runs concurrently in `npm start`, so while developing graphql, it will update typescript and hooks instantly.
- Apollo Client IDE setup for auto completion
- Redux setup by injecting a reducer into an already setup CommerceTools Redux store
- Utilities
  - gqlHelpers.ts - Query options and variable helpers to get locale, etc.
  - logger.ts - a proxy for all logging, if we want to move where errors are stored.
  - useNotify - hooks to show notifications
  - usePrevious - standard hook to get last value (https://usehooks.com/usePrevious/) 
- Examples
- Documentation
- etc.

## Being a developer

These are the technologies you should know to build a Commercetools Custom App
- React https://reactjs.org/
- React Hooks https://reactjs.org/docs/hooks-intro.html
- React Redux https://react-redux.js.org/
- Redux toolkit https://redux-toolkit.js.org/
- GraphQl https://graphql.org/
- Typescript https://www.typescriptlang.org/
- npm https://www.npmjs.com/
- Intl https://formatjs.io/
- Jest https://jestjs.io/

Install these extensions in Chrome
- React Developer Tools https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- Redux devtools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
- Apollo https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm

## Installation

```bash
$ npm install
$ npm start
```

Navigate to http://localhost:3001

## Update GraphQL schema

CommerceTools update the system all the time, so regularly. It is good to update the schema.

1. Log into merchant center in a browser, and copy a token from the cookie `mcAccessToken`
2. Paste the token into `codegen-generate-schema.yml`, as the `Cookie` header
3. Run this script:

```bash
$ npm generate-schema
```

## Development

The `custom-application-config.json` is configured to use the HTTP APIs in the GCP-EU region. If you plan to run the Custom Application in another environment, change the cloud identifier accordingly.

## Run tests

Run the following command to run the tests:

```bash
$ yarn test
$ yarn test:watch
```

## Build the production bundles

Run the following command to build the production bundles with webpack:

```bash
$ yarn build
```

## Adjust the configuration for production

The `custom-application-config.json` has a `env.production` configuration object. When you're ready to deploy the application to production, make sure to provide the URL where the Custom Application is hosted.

## Links
- Documentation - https://docs.commercetools.com/custom-applications/
- Template - https://github.com/commercetools/merchant-center-application-kit
- UI-kit - https://uikit.commercetools.com/
- UI-components - https://docs.commercetools.com/custom-applications/components/application-shell
- GraphQL schema & typescript generator - https://graphql-code-generator.com/
- GraphiQL (test GraphQL queries & mutations) - https://impex.europe-west1.gcp.commercetools.com/graphiql

## What happens at startup
- index.js - renders EntryPoint component
- `views/entry-point/entry-point.tsx`
  - sets up global error handling, which uses redux to handle showing ui notifications for errors
  - adds menu items to the Commercetools menu to enter this app
  - wraps app in ApplicationShell. ApplicationShell handles:
    - authentication. Log in user to Merchant Center
    - setup of apollo client
    - loading app inside Commercetools ui
  - Adds routes
- `routes.tsx`
  - injects custom reducers into redux
  - checks authorization
  - loads MainView
- `views/main-view/main-view.tsx`
  - Handles routes

### Route - bundle

The focus here was to make POC's for bundles as json data stored on product, variant or as a bundle product.

Prerequisites:
- This was built for the `CustomApp` trial project, and relies on the product fields and structure in that project.

Notes:
- Should be refactored to use redux, now that we figured out how to inject custom reducer into store.

- `views/bundle/bundle-start.tsx`
  - loads products using autogenerated function built from GraphQL query
  - uses loading & error state to handle ui
    - on success - loads ProductsTable with products data
- `components/products-table.tsx`
  - displays DataTable from Commercetools-uikit with product data
    - defines columns and selection
    - returns selection to parent bundle-start.tsx
- `views/bundle/bundle-add.tsx`
  - like products-table, this gets product data from `bundle-start.tsx`
  - is wrapped inside InfoModalPage
    - Note that this UI component is not part of `@commercetools-uikit`, but is in `@commercetools-frontend`
  - Loads button views
- `views/bundle/bundle-as-attribute-button.tsx`
  - Example for mutations that update attributes on product and variants
  - Handles state loading & error
- `views/bundle/bundle-as-product-button.tsx`
  - Example for mutation that create a new bundle product with master variant
  - Handles state loading & error

### Route - prices-json

The focus here was to make POC for price field matrix for a product & subscription combination.

Prerequisites:
- This was built for the `CustomApp` trial project, and relies on the product fields and structure in that project.

Notes:
- The fields do not work in ui, and there is no handling of data
- This was made, when we thought prices would be stored in json in a custom field
- Should be refactored to use redux, now that we figured out how to inject custom reducer into store

### Route - references

The focus here was to make POC for use of redux.

Several things are loaded in the start view.

Loading status and errors are handled correctly.

Everything is saved in redux, and a list is shown.

User selection in the view, saves the selected product to redux.
- This approach should be the template for data handling


## That's it

Have fun building a custom app in CommerceTools
