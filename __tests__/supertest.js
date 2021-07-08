const request = require('supertest');
const server = 'http://localhost:3000';

describe('Global Route Handling', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with a 200 status and a text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      })
    })
  })
  describe('API Route Handling', () => {
    describe('/api/search', () => {
      // Declare test query string input
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/api/search')
          .expect('Content-Type', /json/)
          .expect(200);
      })
      it('search results are in the body of the response')
        return request(server)
          .get('/api/search')
          .expect(function(res) {
            // res.body.id = 'search result expectation'
            // res.body.search = 'results'
          })
    })
  })
})