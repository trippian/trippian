import {
  expect, ImmutableHelper, chaiImmutable
}
from '../helpers/clientTestHelpers'

import store from './store'
import Immutable, {
  List
}
from 'immutable'

describe('redux store', () => {
  describe('reducer', () => {
    it('has default state for trippians and destinations', () => {
      let state = store.getState()
      const actualTrippians = state.get('trippians')
      const actualDestinations = state.get('destinations')
      const expected = Immutable.fromJS([])
      expect(Immutable.fromJS(actualTrippians)).to.equal(expected)
      expect(Immutable.fromJS(actualDestinations)).to.equal(expected)
    })

    it('can dispatch SET_DESTINATIONS with data', () => {
      const payload = [{
        name: 'abc dest'
      }, {
        name: 'def dest'
      }]
      store.dispatch({
        type: 'SET_DESTINATIONS',
        data: {
          destinations: payload
        }
      })
      const actual = store.getState().get('destinations')

      // nested object is hard to compare, for now, we just compare individual elements
      expect(actual).to.include(payload[0])
      expect(actual).to.include(payload[1])
    })

    // => TODO, will need to add switch case to apiTrippianReducer
    it('can dispatch SET_TRIPPIANS', () => {

    })

    // => TODO, will need to add switch case to apiTrippianReducer
    it('can dispatch GET_DESTINATION_BY_ID', () => {

    })


    // => TODO, will need to add switch case to apiTrippianReducer
    it('can dispatch GET_TRIPPIAN_BY_ID', () => {

    })


    // => TODO, will need to add switch case to apiTrippianReducer
    it('can dispatch GET_DESTINATIONS', () => {

    })

    // => TODO, will need to add switch case to apiTrippianReducer
    it('can dispatch GET_TRIPPIANS', () => {

    })


  })
})
