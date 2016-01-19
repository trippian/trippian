//"use strict";
const expect = require('chai').expect
const langLib = require('./index')
const _ = require('lodash')

describe('Trippian language library', function(){
	describe('all', function(){
		it('should be a nested object', function(){
			expect(langLib.all).to.satisfy(isNestedObject)

			function isNestedObject(obj) {
				return (typeof obj === 'object') && (typeof obj['hello'] === 'object')
			}
		})
		it ('should contain "您好" under hello > Chinese > text', function(){
			expect(langLib.all['hello']['zh-cn']).to.equal('您好')
		})

		it('should have equal number of available languages with each phrase', function(){
			const len = Object.keys(langLib.all.hello).length
      for (const key in langLib.all) {
        expect(Object.keys(langLib.all[key]).length).to.equal(len)
			}
		})
	})
})