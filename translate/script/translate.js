import * as fs from 'fs'
import {
  sync as globSync
}
from 'glob'
import {
  sync as mkdirpSync
}
from 'mkdirp'
import Translator from './lib/translator'
import sortObject from 'sort-object'
const MESSAGES_PATTERN = './translate/messages/**/*.json'
const LANG_DIR = './translate/lang/'

// Aggregates the default messages that were extracted from the app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({
      id, defaultMessage
    }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }

      collection[id] = defaultMessage
    })

    return collection
  }, {})


// sort the messages by key before writing to file 
defaultMessages = sortObject(defaultMessages)

mkdirpSync(LANG_DIR)
fs.writeFileSync(LANG_DIR + 'en-US.json', JSON.stringify(defaultMessages, null, 2))

// require the zh.json file, and fill in the gaps 
let zhMessages = require('../lang/zh.json')
zhMessages = Object.assign(defaultMessages, zhMessages)
console.log('zh messages', zhMessages)

// write the zh messages into file 
fs.writeFileSync(LANG_DIR + 'zh.json', JSON.stringify(zhMessages, null, 2))

let esMessages = require('../lang/es.json')
esMessages = Object.assign(defaultMessages, esMessages)
fs.writeFileSync(LANG_DIR + 'es.json', JSON.stringify(esMessages, null, 2))


let deMessages = require('../lang/de.json')
deMessages = Object.assign(defaultMessages, deMessages)
fs.writeFileSync(LANG_DIR + 'de.json', JSON.stringify(deMessages, null, 2))

let frMessages = require('../lang/fr.json')
frMessages = Object.assign(defaultMessages, frMessages)
fs.writeFileSync(LANG_DIR + 'fr.json', JSON.stringify(frMessages, null, 2))

// //process kr
// let krMessages = require('../lang/kr.json')
// krMessages = Object.assign(defaultMessages, krMessages)
//   // write the kr messages into file 
// fs.writeFileSync(LANG_DIR + 'kr.json', JSON.stringify(krMessages, null, 2))
