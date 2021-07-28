const { gql } = require('apollo-server');

const typeDefs = gql`
  type Digimon {
    id: ID,
    name: String,
    level: String,
    img: String,
    description: String,
    type: Type,
    dedigivolution: Digimon,
    digivolution: Digimon
  }

  type Query {
    getDigimons: [Digimon]
  }

  enum Type {
    Virus
    Vaccine
    Data
  }
`

module.exports = typeDefs