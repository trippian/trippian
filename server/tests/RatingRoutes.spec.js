import {
  expect,
  should
}
from 'chai'

// const app = require('../src/server-config.js')
import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('get request to /api/rating/:userId', () => {
  it('should return all rating/reviews for the corresponding user', done => {
    request
      .get('/api/rating/8')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })

  it('should return an empty array for users that have no ratings yet', done => {
    request
      .get('/api/rating/32')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.equalTo(0)
      }, done())
  })
})