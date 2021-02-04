// Setting up Apollo GraphQL client (https://www.apollographql.com/docs/devtools/editor-plugins/)
// This provides autocompletion, etc. for .graphql files and gql tags
module.exports = {
  client: {
    service: {
      name: 'Commercetools',
      localSchemaFile: './src/generated/graphql.schema.json',
    },
    includes: ['./src/**/*.{ts,tsx,js,jsx,graphql}'],
    excludes: ['**/node_modules/**'],
  },
};
