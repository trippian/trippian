import {
  expect,
  should
}
from 'chai'

import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('get request to /api/destination', () => {
  it('should return all destinations if there are no params/query', done => {
    request
      .get('/api/destination')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })

  it('should return top 10 popular destinations for ?cat=popular', done => {
    request
      .get('/api/destination?cat=popular')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
        expect(res.body.length).to.be.at.most(10)
      }, done())
  })

  it('should return a location if you enter location name ?q=', done => {
    request
      .get('/api/destination?q=Portland,%20OR')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        res.body.should.have.property('destinationImage', 'destinationDescription', 'destinationName', 'whyVisit', 'popularTrips')
      }, done())
  })

  it('should return error(500) when you search for a location that does not exist', done => {
    request
      .get('/api/destination?q=fakeplace')
      .expect(500, done())
  })
})

describe('get request to /api/destination/:destinationId', () => {
  it('should return all destination information when valid id is passed in', done => {
    request
      .get('/api/destination/50')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        res.body.should.have.property('destinationImage', 'destinationDescription', 'destinationName', 'whyVisit', 'popularTrips')
      }, done())
  })

  it('should return an error(500) for destination that does not exist in the database', done => {
    request
      .get('api/destination/1')
      .expect(500, done())
  })
})