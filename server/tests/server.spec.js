import {
  expect,
  should
}
from 'chai'

// const app = require('../src/server-config.js')
import app from '../src/server-config'
const request = require('supertest').agent(app.listen())

describe('express server', function () {
  it('should return 404 for route that does not exist', function(done) {
    request
      .get('/abc')
      .expect(404, done())
  })
})

describe('express server', function() {
  it('should return 200 for /', function(done) {
    request
      .get('/')
      .expect(200, done())
  })
})

describe('post request to users/:facebookId', function() {
  it('should create user and return user object', function(done) {
    request
      .post('/api/users/1')
      .expect(200)
      .expect('Content-Type', /json/, done())
  })

  it('object should contain properties', function(done) {
    request
      .post('/api/users/1')
      .expect(200)
      .end(function(err, res) {
        res.body.should.have.property('facebookId')
        res.body.should.have.property('id')
        res.body.should.have.property('trippian')
      })
    done()    
  })
})

describe('/destination/:destinationId', function() {
  it('should return an object', function(done) {
    request
      .get('/api/destination/1')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.an('object')
      })
    done()
  })

  it('should have appropriate properties', function(done) {
    request
      .get('/api/destination/1')
      .end(function(err, res) {
        res.body.should.have.property('destinationName')
      })
    done()
  })
})

describe('/trippian/:trippianId', function() {
  it('should return an object', function(done) {
    request
      .get('/api/trippian/1')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.an('object')
      })
    done()
  })

  it('should have appropriate properties', function(done) {
    request
      .get('/api/trippian/1')
      .expect(200)
      .end(function(err, res) {
        res.body.should.have.property('name')
      })
    done()
  })
})


