const freshes = require('./freshes')
const intrainings = require('./intrainings')
const rookies = require('./rookies')
const champions = require('./champions')
const ultimates = require('./ultimates')
const megas = require('./megas')

const digimon = [
  ...freshes,
  ...intrainings,
  ...rookies,
  ...champions,
  ...ultimates,
  ...megas
]

module.exports = digimon