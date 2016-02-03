 import {
   expect
 }
 from '../helpers/clientTestHelpers'
 import * as initialState from './initalState'

 // just a general testing on the data fields 
 describe('inital store state', () => {
   it('should have alert', () => {
     expect(initialState.alert.title).to.equal('')
   })
   it('should have user', () => {
     expect(initialState.user.username).to.equal('')
   })
   it('should have trip', () => {
     expect(initialState.trip.title).to.equal('')
   })
   it('should have review', () => {
     expect(initialState.review.title).to.equal('')
   })
   it('should have destination', () => {
     expect(initialState.destination.name).to.equal('')
   })
   it('should have trippian', () => {
     expect(initialState.trippian.name).to.equal('')
   })
   it('should have inquiry', () => {
     expect(initialState.inquiry.properties.content).to.equal('')
   })
   it('should have dashboard', () => {
     expect(initialState.dashboard.name).to.equal('')
   })

 })
