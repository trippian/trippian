import {
  expect,
  should
}
from 'chai'

// const app = require('../src/server-config.js')
import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('get request to /api/user/:userId', () => {
  it('should return JSON api for the corresponding user if the user exists', done => {
    request
      .get('/api/user/8')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        res.body.should.have.property('trippian', 'name', 'email', 'picture', 'trips', 'reviews')
      }, done())
  })

  it('should return an error (500) for user that does not exist in the database', done => {
    request
      .get('/api/user/1')
      .expect(500, done())
  })
})

describe('get request to /api/trippian', () => {
  it('should return popular trippians when cat=popular', done => {
    request
      .get('/api/trippian?cat=popular')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })

  it('should return all trippians when there is no query params', done => {
    request
      .get('/api/trippian')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})
