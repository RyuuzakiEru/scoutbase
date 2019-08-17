require('dotenv').config({ path: 'variables.env' });
const graphqlServer = require('./helpers/graphqlServer');

const server = graphqlServer();

// TODO Use express middlware to handle cookies (JWT)

// TODO Use express middlware to populate current user
const options = {
  port: 4444,
  endpoint: '/graphql',
};

server.start(options, ({ port, endpoint }) => {
  console.log(`Endpoint running on http://localhost:${port}${endpoint}`);
  console.log(`Playground running on http://localhost:${port}`);
});
