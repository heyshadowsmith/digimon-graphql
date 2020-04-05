const server = require('./server')

server.listen().then(({ url }) => {
  console.log(`Digimon GraphQL API running at ${url}.`);
});