require('dotenv').config()
const { parseEnv } = require('./utils')
const config = parseEnv(process.env)
const api = require('.')(config.bybit)
const assert = require('assert')

api
  .listTickers()
  .then(console.log)
  .catch(console.error)
