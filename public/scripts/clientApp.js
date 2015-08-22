App = (function() {

  var app = function() {
    var endPoint = '/difference';

    this.main = function main() {
      var dateEnteredByUser = { date: this.getDateFromInput() }
      this.postUserInputToServer(endPoint, dateEnteredByUser, this.successHandler);
    };
    this.getDateFromInput = function getDateFromInput() {
      var dateEnteredByUser = app.getTextFromElement('date');
      dateEnteredByUser = new Date(dateEnteredByUser);
      return dateEnteredByUser;
    };
  };

  app.prototype.postUserInputToServer = function(url, dateEnteredByUser, callback) {
      console.log(dateEnteredByUser);
      var app = new App();
      var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.setRequestHeader('Content-type','application/json');
      req.addEventListener('readystatechange', function() {
      if (req.status == 200 && req.readyState == 4) {
        console.log('success');
        callback(req.responseText);
      } else {
        console.log('Request failed to send');
      }
    });
    req.addEventListener("error", function() {
      console.log('Server did not respond')
    });
      dateEnteredByUser = JSON.stringify(dateEnteredByUser);
      req.send(dateEnteredByUser);
  };

  app.prototype.successHandler = function(response) {
    var differenceInput = document.getElementById('difference');
    (response && response != '')
    ? app.showInput(differenceInput, response)
    : app.hideInput(differenceInput);
  };

  app.getTextFromElement = function(elementName) {
    return document.getElementById(elementName).value;
  };

  app.setTextInElement = function(elementName, text) {
    document.getElementById(elementName).value = text;
  };

  app.showInput = function(differenceInput, dateOuput) {
    app.setTextInElement('difference', dateOuput);
    differenceInput.classList.add('cursor-text');
    differenceInput.classList.remove("invisible");
  };

  app.hideInput = function(differenceInput) {
    differenceInput.classList.remove('cursor-text');
    differenceInput.classList.add("invisible");
  };
  return app;
})();
