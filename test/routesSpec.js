var chai = require('chai');
var assert = chai.assert;
var Server = require('../app/server');
var superagent = require('superagent');

describe('Routes', function() {

  beforeEach(function(done) {
    domain = 'http://localhost:'
    port = 3001;
    rootUrl = domain + port;
    server = new Server(port);
    server.start();
    done();
  });

  afterEach(function(done) {
    server.stop();
    done();
  })

  it('should respond to a GET request on "/" and return a 200 (OK) status', function(done) {

  var testRoute = rootUrl;
  var expectedStatusCode = 200;

  superagent
    .get(testRoute)
    .end(function(error, response) {
      assert.equal(response.status, expectedStatusCode, 'Status was not 200 (OK). Instead, it was ' + response.status);
      done();
    });
  });

  it('should respond to a GET request on a non-existent page with a 404 (Not Found) status', function(done) {

  var testRoute = '/idontexistatall'
  var expectedStatusCode = 404;

  superagent
    .get(rootUrl + testRoute)
    .end(function(error, response) {
      assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (Not Found). Instead, it was ' + response.status);
      done();
    });
  });

  it('should respond to a GET request on the scripts folder with a 200 (OK) status', function(done) {

  var testRoute = '/public/scripts/clientApp.min.js';
  var expectedStatusCode = 200;

  superagent
    .get(rootUrl + testRoute)
    .end(function(error, response) {
      assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (OK). Instead, it was ' + response.status);
      done();
    });
  });

  it('should respond to a GET request on the styles folder with a 200 (OK) status', function(done) {

  var testRoute = '/public/styles/site.min.css';
  var expectedStatusCode = 200;

  superagent
    .get(rootUrl + testRoute)
    .end(function(error, response) {
      assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (OK). Instead, it was ' + response.status);
      done();
    });
  });

  it('should respond to a POST request when hitting the difference controller with a 200 (OK) status', function(done) {

  var testRoute = '/difference';
  var expectedStatusCode = 200;

  superagent
    .post(rootUrl + testRoute)
    .end(function(error, response) {
      console.log()
      assert.equal(response.status, expectedStatusCode, 'Status was not 200 (OK). Instead, it was ' + response.status);
      done();
    });
  });
});
