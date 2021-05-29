const request = require('supertest')
const app = require('../server/server.js')




describe('GET / serachTerm', function() { 
  it('respond with json', function(done) { 
    request(app) 
      .get('/getInput/:searchTerm') 
      .expect('Content-Type', /json/) 
      .expect(200, done); 
  }); 
});