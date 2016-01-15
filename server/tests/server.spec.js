// import {
//   expect
// }
// from 'chai'

const app = require('../src/server-config.js');
const request = require('supertest').agent(app.listen());

describe('Hello from koajs', function() {
  it('should say "Hello from koajs', function(done) {
    request
    .get('/')
    .expect(200)
    .expect('Hello from koajs', done);
  });
});