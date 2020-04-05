const digimon = require('./digimon')

const resolvers = {
  Query: {
    getDigimons: () => digimon,
  }
}

module.exports = resolvers