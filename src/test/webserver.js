const { assert, expect } = require('chai');

const server_uri = 'http://localhost:3000'
const request = require('supertest').agent(server_uri);

describe('GET /romannumerals', () => {
   
   it("calling without a 'query' should return a client error", (done) => {
        request
        .get(`${server_uri}/romannumerals`)
        .expect(400, done)
   });
   
   it('calling query with the number 0', (done) => {
         request
         .get(`${server_uri}/romannumerals?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Only numbers between 1 and 255 can be converted to roman numerals');
               done();
            }
         )
   });

   it('calling query outside of the range (greater than) ', (done) => {
      request
         .get(`${server_uri}/romannumerals?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Only numbers between 1 and 255 can be converted to roman numerals');
               done();
            }
         )
   });

   it('calling query outside of the range (smaller than) ', (done) => {
      request
         .get(`${server_uri}/romannumerals?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Only numbers between 1 and 255 can be converted to roman numerals');
               done();
            }
         )
   });

   it('calling query with a number in the range should return OK', (done) => {
      request
      .get(`${server_uri}/romannumerals?query=10`)
      .expect(200)
      .end(
         (err, res) => {
            if (err) return done(err);
            res.body.should.have.property('input');
            res.body.should.have.property('output');
            expect(res.body.input).to.equal(10);
            expect(res.body.output).to.equal('X');

            done();
         }
      )
   });


});