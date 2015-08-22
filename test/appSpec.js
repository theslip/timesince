var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var clientApplication = require('../public/scripts/clientApp');
var app = new App();

global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

beforeEach(function() {
  var requests = this.requests = [];

  this.clientApplication = sinon.spy(app, 'postUserInputToServer');
  this.xhr = sinon.useFakeXMLHttpRequest();
  
  this.xhr.onCreate = function (xhr) {
    requests.push(xhr);
  };
});

afterEach(function () {
  this.xhr.restore();
  this.clientApplication.restore();
});

describe('App', function() {

  it('should receive a 200 (OK) response when sending a POST to the server', function() {

    var callback = sinon.spy();
    var testRoute = '/difference';
    var testUserInput = '03/13/1993';
    var date = new Date(testUserInput);
    var testResponseData = '[{ "data": "test" }]';
    var testHeader = '{ "Content-Type": "application/json" }';
    var request;

    var expectedLength = 1;
    var expectedResponseData = testResponseData;

    this.clientApplication(testRoute, date, callback);
    assert.equal(expectedLength, this.requests.length, 'The number of requests is wrong!');

    var request = this.requests[0];
    request.respond(200, testHeader, testResponseData);
    sinon.assert.calledWith(callback, expectedResponseData);
  });
});
