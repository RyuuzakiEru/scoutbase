// connects to remote prisma endpoint so we can query in JS
const { Prisma } = require('prisma-binding');

// We'll use prismadb to be spread into graphqlyoga server context, and to directly forward some queries/resolvers
const prismadb = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
  debug: false,
});

module.exports = prismadb;
