// import {
//   expect
// }
// from 'chai'

// const app = require('../src/server-config.js');
import { app } from '../src/server-config'
const request = require('supertest').agent(app.listen());

describe('express server', function () {
  it("should return 404 for route that doesn't exist", function (done) {
    request
      .get('/')
      .expect(404, done());
  });
});
