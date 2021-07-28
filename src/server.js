const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const digimon = require('./digimon')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    digimon
  }),
  playground: true,
  introspection: true
})

module.exports = server