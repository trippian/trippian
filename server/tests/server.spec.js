// import {
//   expect
// }
// from 'chai'

const app = require('../src/server-config.js');
const request = require('supertest').agent(app.listen());

describe('Hello from expressjs', function () {
  it('should say "Hello from expressjs', function (done) {
    request
      .get('/')
      .expect(200)
      .expect('Hello from expressjs', done);
  });
});
