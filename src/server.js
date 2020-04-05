const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

module.exports = server