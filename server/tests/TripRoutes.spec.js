import {
  expect,
  should
}
from 'chai'

import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

// describe('get request to /api/destination', () => {
//   it('should return popular trips when cat=popular', done => {
//     request
//       .get('/api/destination?cat=popular')
//       .expect(200)
//       .end((err, res) => {
//         expect(res.body).to.be.an('array')
//         expect(res.body.length).to.be.at.least(1)
//         expect(res.body.length).to.be.at.most(10)
//       }, done())
//   })

//   it('should')
// })

describe('get request to /api/trip', () => {
  it('should return all trips', done => {
    request
      .get('/api/trip')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('aray')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})

describe('get request to /api/trip/:tripId', () => {
  it('should return trip information for a valid tripId', done => {
    request
      .get('/api/trip/63')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        res.body.should.have.property('summary', 'netVote', 'totalVotes', 'destination', 'details', 'title')
      }, done())
  })

  it('should return an error (500) for trips that do not exist', done => {
    request
      .get('/api/trip/1')
      .expect(500, done())
  })
})