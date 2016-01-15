"use strict";
const expect = require('chai').expect
const index = require('./index')
const _ = require('lodash')

describe('index', function () {
  describe('helloMaker', function () {
    it('return `Hello, world`', function () {
      expect(index.helloMaker()).to.equal('Hello, world!')
    })
  })
})
