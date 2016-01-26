import { expect,should } from 'chai'

import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('get request to /api/inquiry/:userId', () => {
  it('should return all inquiry in an array if the user exist and has an inquiry', done => {
    request
      .get('/api/inquiry/8')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err,res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })

  it('should return an error (500) for user inquiry that does not exist in the database', done => {
    request
      .get('/api/inquiry/1')
      .expect(500, done())
  })
})