var chai = require('chai');
var assert = chai.assert;
var Server = require('../app/server');
var superagent = require('superagent');

describe('server', function(done) {
  beforeEach(function() {
    var port = 3001;
    server = new Server(port);
    server.start();
    done();
  });
});

describe('routes', function() {

  beforeEach(function() {
    var port = 3001;
    server = new Server(port);
    server.start();
  });

  afterEach(function() {
    server.destroy();
  })

  it('should respond to a get request and respond with a 200 (OK) status', function(done) {
    superagent
      .get('http://localhost:' + 3001)
      .end(function(err, res) {
        console.log(res);
        assert.equal(res.status, 200, 'Status was not 200 (OK). Instead, it was ' + res.status);
        done();
      });
  });
});
