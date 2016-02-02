import { expect,should } from 'chai'

import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('get /api/destination', () => {
  it('should return back all destinations', done => {
    request
      .get('/api/destination')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})

describe('get /api/trippian', () => {
  it('should return all trippians', done => {
    request
      .get('/api/trippian')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})

describe('get /api/user', () => {
  it('should return all users', done => {
    request
      .get('/api/user')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})

describe('get /api/trip', () => {
  it('should return all trips', done => {
    request
      .get('/api/trip')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})

describe('get /api/inquiry', () => {
  it('should return all inquiries', done => {
    request
      .get('/api/inquiry')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.at.least(1)
      }, done())
  })
})


xdescribe('admin post /api/user', () => {
  it('should create a user', done => {
    // var id
    request
      .post('/api/user')
      .expect(200)
      .end((err, res) => {
        expect(err).to.equal(null)
        console.log(res.body)
        // id = res.body.id
      }, done())
      // .del(`/api/user/${id}`)
      // .expect(200)
      // .end(done)
  })
})

