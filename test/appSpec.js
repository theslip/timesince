var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var clientApp = require('../public/scripts/clientApp');
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
var app = new App();

beforeEach(function() {
  this.spyApp = sinon.spy(app, 'postUserInputToServer');
  this.xhr = sinon.useFakeXMLHttpRequest();
  var requests = this.requests = [];
  this.xhr.onCreate = function (xhr) {
    requests.push(xhr);
  };
});

afterEach(function () {
  this.xhr.restore();
  this.spyApp.restore();
});

describe('App', function() {

  it('should receive a 200 (OK) response when sending a POST to the server', function() {

    var callback = sinon.spy();
    var testRoute = '/difference';
    var testUserInput = '03/13/1993';
    var date = new Date(testUserInput);
    var testResponseData = '[{ "data": "test" }]';
    var testHeader = '{ "Content-Type": "application/json" }';

    this.spyApp(testRoute, date, callback);
    assert.equal(1, this.requests.length, 'Same length!');
    this.requests[0].respond(200, testHeader, testResponseData);
    sinon.assert.calledWith(callback, testResponseData);

  });
});
