// Setting up Apollo GraphQL client (https://www.apollographql.com/docs/devtools/editor-plugins/)
// This provides autocompletion, etc. for .graphql files and gql tags
module.exports = {
  client: {
    service: {
      name: 'Commercetools',
      localSchemaFile: './src/generated/graphql.schema.json',
    },
    // excludes: ['./src/generated/graphql.tsx'],
    // Below is a workaround to omit looking at graphql.tsx. It contains dublicate query/mutation names,
    // and Apollo plugin cannot handle that
    tagName: 'omitGQLtags',
  },
};
