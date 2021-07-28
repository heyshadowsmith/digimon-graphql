const resolvers = {
  Query: {
    getDigimons: (parent, args, { dataSources }, info) => dataSources.digimon,
  },
  Digimon: {
    dedigivolution: ({ dedigivolution }, args, { dataSources }, info) => dataSources.digimon.find(digi => dedigivolution === digi.id),
    digivolution: ({ digivolution }, args, { dataSources }, info) => dataSources.digimon.find(digi => digivolution === digi.id)
  }
}

module.exports = resolvers