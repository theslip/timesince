App = (function() {

  var app = function() {
    var END_POINT = '/difference';

    this.main = function main() {
      var dateEnteredByUser = { date: this.getDateFromInput() }
      this.postUserInputToServer(END_POINT, dateEnteredByUser, this.successHandler);
    };

    this.getDateFromInput = function getDateFromInput() {
      var dateEnteredByUser = app.getTextFromElement('date');
      dateEnteredByUser = new Date(dateEnteredByUser);
      return dateEnteredByUser;
    };
  };

  app.prototype.postUserInputToServer = function(url, dateEnteredByUser, callback) {
    var app = new App();
    var req = new XMLHttpRequest();

    req.open('POST', url, true);
    req.setRequestHeader('Content-type','application/json');

    req.addEventListener('readystatechange', function() {
      if (req.status == 200) {
        callback(req.responseText);
      } else {
        console.log('Request failed to send');
      }
    });

    req.addEventListener('error', function() {
      console.log('Server did not respond')
    });

    dateEnteredByUser = JSON.stringify(dateEnteredByUser);
    req.send(dateEnteredByUser);
  };

  app.prototype.successHandler = function(response) {
    var differenceInputField = document.getElementById('difference');

    response
      ? app.showInput(differenceInputField, response)
      : app.hideInput(differenceInputField);
  };

  app.getTextFromElement = function(elementName) {
    return document.getElementById(elementName).value;
  };

  app.setTextInElement = function(elementName, text) {
    document.getElementById(elementName).value = text;
  };

  app.showInput = function(differenceInputField, dateOuput) {
    app.setTextInElement('difference', dateOuput);
    differenceInputField.classList.add('cursor-text');
    differenceInputField.classList.remove('invisible');
  };

  app.hideInput = function(differenceInputField) {
    differenceInputField.classList.remove('cursor-text');
    differenceInputField.classList.add('invisible');
  };

  return app;
})();
