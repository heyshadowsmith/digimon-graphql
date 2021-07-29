const resolvers = {
  Query: {
    getDigimons: (parent, args, { dataSources }, info) => dataSources.digimon,
  },
  Digimon: {
    dedigivolutions: ({ dedigivolutions }, args, { dataSources }, info) => dataSources.digimon.filter(digi => Array.isArray(dedigivolutions) && dedigivolutions.includes(digi.id)),
    digivolutions: ({ digivolutions }, args, { dataSources }, info) => dataSources.digimon.filter(digi => Array.isArray(digivolutions) && digivolutions.includes(digi.id))
  }
}

module.exports = resolvers