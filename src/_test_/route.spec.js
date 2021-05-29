const request = require('supertest')
const app = require('../server/server.js')




/*describe('Get Endpoints', () => {
  it('respond with json', async () => {
    const res = await request(app)
      
    expect(res.statusCode).toEqual(200)
    
    
  })
})
*/

describe('GET / serachTerm', function() { 
  it('respond with json', function(done) { 
    request(app) 
      .get('/getInput/:searchTerm') 
      //.set('Accept', 'application/json') 
      .expect('Content-Type', /json/) 
      .expect(200, done); 
  }); 
});