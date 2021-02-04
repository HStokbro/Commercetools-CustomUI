<p align="center">
  <a href="https://commercetools.com/">
    <img alt="commercetools logo" src="https://unpkg.com/@commercetools-frontend/assets/logos/commercetools_primary-logo_horizontal_RGB.png">
  </a>
  <b>Custom Merchant Center UI app</b>
</p>

This is an improved template for developing a Custom Merchant Center UI application.
Its starting point was https://github.com/commercetools/merchant-center-application-kit, but the template is enhanced with linting, schema download, apollo client, utilities, examples, etc.

## Installation

```bash
$ npm install
$ npm start
```

Navigate to http://localhost:3001

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
- Extra UI components (Not in UI-kit) - https://docs.commercetools.com/custom-applications/components/application-shell
- GraphQL Schema builder - https://graphql-code-generator.com/

## Root Structure
- src/
  - components/ = The ui
  - generated/ = GraphQL schema
  - graphql/ = queries, mutations, fragments
  - i18n/ = translation files
  - utils/ = helper functions

## What happens at startup
- index.jsx - renders EntryPoint component
- components/entry-point/entry-point.jsx
  - sets up global error handling, which uses redux to handle showing ui notifications for errors
  - adds menu items to the Commercetools menu to enter this app
  - wraps app in ApplicationShell, which handles authentication, sets up apollo client and loads app inside Commercetools ui
  - Adds routes
- routes.jsx - loads MainView
- components/main-view/main-view.jsx - loads Bundles
- components/bundles/bundles.jsx
  - loads products using useMcQuery hook and GraphQL query
  - uses loading & error state to handle ui
    - on success - loads ProductsTable with products data
- components/bundles/products-table.jsx
  - displays DataTable from Commercetools-uikit with product data
    - defines columns and selection
    - returns selection to parent bundles.jsx
- components/bundles/add-table.jsx
  - like products-table, this gets product data from bundles
  - is wrapped inside InfoModalPage. (just to try it out)
    - Note that this UI component is not part of @commercetools-uikit, but is in @commercetools-frontend
  - has examples for mutations, and state handling of loading & error afterwards
