const freshes = require('./freshes')
const inTrainings = require('./inTrainings')
const rookies = require('./rookies')
const champions = require('./champions')
const ultimates = require('./ultimates')
const megas = require('./megas')

const digimon = [
  ...freshes,
  ...inTrainings,
  ...rookies,
  ...champions,
  ...ultimates,
  ...megas
]

module.exports = digimon