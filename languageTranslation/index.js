"use strict"

const langData= require('./language.json')
const _ = require('lodash')

let _numberOfGreetings = 0
for (let key in langData) {
	_numberOfGreetings++;
}

const languageList = Object.keys(langData['hello'])
const numberOfLanguages = languageList.length


module.exports = {
  all: langData,
  allMessages: Object.keys(langData),
  numberOfLanguages: numberOfLanguages,
  languageList: languageList
}