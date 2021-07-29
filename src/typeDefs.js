const { gql } = require('apollo-server');

const typeDefs = gql`
  type Digimon {
    id: ID,
    name: String,
    level: String,
    img: String,
    description: String,
    types: [Type],
    dedigivolutions: [Digimon],
    digivolutions: [Digimon]
  }

  type Query {
    getDigimons: [Digimon]
  }

  enum Type {
    Free
    Virus
    Vaccine
    Data
  }
`

module.exports = typeDefs