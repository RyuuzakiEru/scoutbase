const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('../resolvers/Mutation');
const Query = require('../resolvers/Query');
const prismadb = require('./prismadb');

// Create the GraphQL Yoga Server

function graphqlServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    // spread prisma client to context
    context: req => ({ ...req, prismadb }),
  });
}

module.exports = graphqlServer;
