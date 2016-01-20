import {
  expect
}

from '../../client/helpers/clientTestHelpers'

import {
  getPathNameFromHash
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
})
