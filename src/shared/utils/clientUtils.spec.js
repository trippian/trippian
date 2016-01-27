import {
  expect
}

from '../../client/helpers/clientTestHelpers'

import {
  getPathNameFromHash, getParamFromQueryStringByName, getLocaleFromQueryString
}
from './clientUtils'

describe('clientUtils', () => {
  describe('getPathNameFromHash', () => {
    it('should return undefined when incorrectly formatted string is provided', () => {
      const actual = getPathNameFromHash('InCorrectHashStringNotStartingWith#')
      const actual1 = getPathNameFromHash('#') // length should be longer than 2 
      expect(actual).to.equal(undefined)
      expect(actual1).to.equal(undefined)
    })
    it('should return the correct path', () => {
      const actual = getPathNameFromHash('#/become-a-trippian?_k=i8h4pr')
      expect(actual).to.equal('/become-a-trippian')
      const actual1 = getPathNameFromHash('#/?_k=i8h4pr')
      expect(actual1).to.equal('/')
    })
  })

  describe('getParamFromQueryStringByName', () => {
    it('should return the correct param', () => {
      const search = '?locale=en-US'
      const actual = getParamFromQueryStringByName(search, 'locale')
      expect(actual).to.equal('en-US')
    })
    it('should return empty string when the name is not present', () => {
      const search = '?locales=en-US'
      const actual = getParamFromQueryStringByName(search, 'locale')
      expect(actual).to.equal('')
    })

    it('should return empty string when the query is not properly formatted', () => {
      const search = 'locale+en-US'
      const actual = getParamFromQueryStringByName(search, 'locale')
      expect(actual).to.equal('')
    })

    it('should be able to handle multiple queries', () => {
      const search = '?name=audrey&address=novato&locale=zh'
      const actual = getParamFromQueryStringByName(search, 'locale')
      expect(actual).to.equal('zh')
      const actual1 = getParamFromQueryStringByName(search, 'name')
      expect(actual1).to.equal('audrey')
    })
  })

  describe('getLocaleFromQueryString', () => {
    it('should return default locale en-US the input is not string ', () => {
      const actual = getLocaleFromQueryString(12)
      expect(actual).to.equal('en-US')
    })
    it('should return default locale en-US when no locale query is present ', () => {
      const actual = getLocaleFromQueryString('?name=audrey')
      expect(actual).to.equal('en-US')
    })
    it('should return the correct locale ', () => {
      const actual = getLocaleFromQueryString('?name=audrey&locale=zh')
      expect(actual).to.equal('zh')
    })
  })


})
