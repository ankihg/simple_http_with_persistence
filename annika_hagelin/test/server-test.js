var chai = require('chai');
chai.use(require('chai-http'));

var request = chai.request;
var expect = chai.expect;

describe('server testing', () => {

  it('should get', (done) => {
    request('localhost:3000')
    .get('/trees')
    .end((err, res) => {
      if (err) throw err;
      console.log('response from post');
      expect(res).status(200);
      console.log(res.text);
      done();
    });
  });

  it('should post', (done) => {
    request('localhost:3000')
    .post('/trees')
    .set({'name':'cunninghamia lanceolata'})
    .end((err, res) => {
      if (err) throw err;
      console.log('response from post');
      console.log(res);
      done();
    });
  });

});
