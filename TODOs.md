# TODOs going forward

- OK - Setup GraphQL using hooks (Outdated documentation)
- OK - Get locale to use for querying (No documentation)
- OK - Query products (Not much documentation. I miss examples)
- OK - Use UIKit (datatable, buttons, etc.) (Fair documentation)
- OK - Show toast notifications (No documentation)
- OK - Mutate product & variable field (Not much documentation. I miss examples)
- OK - Investigate menu, routes (Fair documentation)
- OK - Figure out how to hook into the Commercetools Redux store - (No documentation)
- OK - Setup eslint
- OK - Script for download of graphql schema
- OK - Setup Apollo client
- OK - Add documentation in README
- OK - Setup Typescript (No documentation)
- OK - Convert files to typescript
- OK - Build Typescript from GraphQL / graphql.schema.json
- OK - Use generated typescript
- OK - Build product bundle with references
- OK - Cleanup bundles code
- OK - Fix error being shown several times
- OK - Make product list with single select
- OK - Build queries for categories, product types, currencies
- OK - Build redux setup
- OK - Build types for reference state
- OK - Remove reference types - Not using it anyway
- Build POC example for updating several variant prices at once (With price pr. channel)
  - OK - Build money input component to hide away field & money complexity
  - OK - Update prices in redux on money input blur?
  - OK - Update ProductPrices after saving new prices
- Init redux state at route start component. Remove data used in other components
- UI & styling
- Build routes and menu
- Make a reusable wrapper component for loading data.
  - Send it an array of lazy query hooks to handle, along with where to store the result
  - Component takes care of state, ui, errors
- Setup hosting for custom app
- Add custom app to Merchant Center
  
# Note - Things to look out for

- Slug and variant key have to be unique
- SimpleMoneyInput component does not handle currencies. Remove "currencies" from MoneyInput to disable currency being editable
- Weird bug: Tabbing from input to input does not work when Chrome Developer Tools is open
