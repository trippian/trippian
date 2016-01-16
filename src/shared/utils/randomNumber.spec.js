// import expect fromm 'expect'
import {
  expect
}
from 'chai'
import randomNumber from './randomNumber'

describe('randomNumber', () => {
  it('should return a random number between -1 and 11 when no args are provided', () => {
    expect(randomNumber()).to.be.within(-1, 11)
  })

  it('should return a random number between -1 and target number when arg is provided', () => {
    const actual = randomNumber(100)
    expect(actual).to.be.within(-1, 101)
  })
})
