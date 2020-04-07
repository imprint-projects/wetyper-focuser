const aliases = {
  focuser: '@wetyper/focuser',
  examples: '@wetyper/focuser-examples',
}

module.exports = name => aliases[name] || name
