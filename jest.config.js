/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  resolver: './tests/libs/export_maps_resolver.js',
  testEnvironment: 'node'
}


module.exports = config
