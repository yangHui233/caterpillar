'use strict'

const fs = require('fs')
const path = require('path')

const LINE_TYPE = process.env.LINE_TYPE
const NODE_ENV = process.env.NODE_ENV
let platformDef = require('./platform/' + LINE_TYPE)
let config = require('../src/Config/env.' + NODE_ENV + '.' + LINE_TYPE)
fs.writeFileSync(
  path.resolve(__dirname, '../src/Config/index.js'),
  'module.exports=' + JSON.stringify(config)
)
module.exports = {
  getPlatformConfig: function () {
    return Object.keys(platformDef).reduce((env, key) => {
      env[key] = JSON.stringify(platformDef[key])
      return env
    }, {})
  },
  rejectAlias: function () {
    let rejectRes = {}
    if (platformDef && platformDef.page) {
      let page = platformDef.page
      for (var i in page) {
        let comp = page[i]
        for (var j in comp) {
          if (comp[j] && comp[j].path) {
            rejectRes['process.env.platformDef.' + i + '.' + j + '.path'] =
              comp[j].path
          }
        }
      }
    }
    return rejectRes
  },
}
