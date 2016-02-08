import {
  expect, ImmutableHelper, chaiImmutable
}
from '../helpers/clientTestHelpers'

import store, {
  getPopularDestinations, getPopularTrippians
}
from './store'
import Immutable, {
  List
}
from 'immutable'

describe('redux store', () => {
  describe('apiTrippianReducer', () => {
    it('has default state for trippians and destinations', () => {
      // apiTrippianReducer 
      let state = store.getState().apiTrippian
        // log.info('getting state', state.apiTrippian)
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
        type: 'apiTrippian.SET_DESTINATIONS',
        payload: {
          destinations: payload
        }
      })
      const actual = store.getState().apiTrippian.get('destinations')

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

    // async testing 
    it('can dispatch getPopularDestinations', () => {
      const oldDestinations = store.getState().apiTrippian.get('destinations')
      store.dispatch(getPopularDestinations()).then(() => {
        const actual = store.getState().apiTrippian.get('destinations')
          // log.info(oldDestinations, actual)
        expect(actual).to.not.equal(oldDestinations)
      })
    })

    it('can dispatch getPopularTrippians', () => {
      const oldTrippians = store.getState().apiTrippian.get('trippians')
      store.dispatch(getPopularTrippians()).then(() => {
        const actual = store.getState().apiTrippian.get('trippians')
        expect(oldTrippians).to.not.equal(actual)
      })
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
  describe('appStateReducer', () => {
    it('has default state of en', () => {
      const expected = store.getState().appState.get('locale')
      expect(expected).to.equal('en-US')
    })

    it('can dispatch SET_LOCALE with locale payload', () => {
      store.dispatch({
        type: 'appState.SET_LOCALE',
        payload: {
          locale: 'zh'
        }
      })
      const expected = store.getState().appState.get('locale')
      expect(expected).to.equal('zh')
    })

    it('can dispatch SET_LOCALE_MESSAGES with messages payload', () => {
      const messages = {
        'send_button.label': '发送',
        'send_button.tooltip': '发消息'
      }
      store.dispatch({
        type: 'appState.SET_LOCALE_MESSAGES',
        payload: {
          messages: messages
        }
      })
      const expected = store.getState().appState.get('messages')
      expect(expected).to.equal(messages)
    })

    it('can dispatch SET_USERNAME with username payload', () => {
      store.dispatch({
        type: 'appState.SET_USERNAME',
        payload: {
          username: 'vidaaudrey'
        }
      })
      const expected = store.getState().appState.get('username')
      expect(expected).to.equal('vidaaudrey')
    })


    it('can dispatch SET_DISPLAYNAME with displayName payload', () => {
      store.dispatch({
        type: 'appState.SET_DISPLAYNAME',
        payload: {
          displayName: 'Audrey Li'
        }
      })
      const expected = store.getState().appState.get('displayName')
      expect(expected).to.equal('Audrey Li')
    })

  })
})
