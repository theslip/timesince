/* eslint-env node, node */
/* eslint-env node, mocha */

var chai = require('chai')
var assert = chai.assert
var startServer = require('../app/server')
var request = require('superagent')

describe('Routes', function () {
  var DOMAIN = 'http://localhost:'
  var PORT = 3001
  var ROOT_URL = DOMAIN + PORT

  beforeEach(function () {

    this.server = startServer(3001)
  })

  afterEach(function () {
    this.server.stop()
  })

  it('should respond to a GET request on "/" and return a 200 (OK) status', function (done) {

    var testRoute = ROOT_URL
    var expectedStatusCode = 200

    request
      .get(testRoute)
      .end(function(error, response) {
        assert.equal(response.status, expectedStatusCode, 'Status was not 200 (OK). Instead, it was ' + response.status)
        done()
      })
  })

  it('should respond to a GET request on a non-existent page with a 404 (Not Found) status', function (done) {

    var testRoute = '/idontexistatall'
    var expectedStatusCode = 404

    request
      .get(ROOT_URL + testRoute)
      .end(function(error, response) {
        assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (Not Found). Instead, it was ' + response.status)
        done()
      })
  })

  it('should respond to a GET request on the scripts folder with a 200 (OK) status', function (done) {

    var testRoute = '/public/scripts/clientApp.min.js'
    var expectedStatusCode = 200

    request
      .get(ROOT_URL + testRoute)
      .end(function(error, response) {
        assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (OK). Instead, it was ' + response.status)
        done()
      })
  })

  it('should respond to a GET request on the styles folder with a 200 (OK) status', function (done) {

    var testRoute = '/public/styles/site.min.css'
    var expectedStatusCode = 200

    request
      .get(ROOT_URL + testRoute)
      .end(function(error, response) {
        assert.equal(response.status, expectedStatusCode, 'Status was not ' + expectedStatusCode + ' (OK). Instead, it was ' + response.status)
        done()
      })
  })

  it('should respond to a POST request when hitting the difference controller with a 200 (OK) status', function (done) {

    var testRoute = '/difference'
    var expectedStatusCode = 200

    request
      .post(ROOT_URL + testRoute)
      .end(function(error, response) {
        assert.equal(response.status, expectedStatusCode, 'Status was not 200 (OK). Instead, it was ' + response.status)
        done()
      })
  })
})
