var App = (function() {

  var app = function() {
    var endPoint = '/difference';

    this.main = function main() {
      var dateEnteredByUser = { date: this.getDateFromInput() }
      this.postUserInputToServer(endPoint, dateEnteredByUser);
    };
    this.getDateFromInput = function getDateFromInput() {
      var dateEnteredByUser = getTextFromElement('date');
      dateEnteredByUser = new Date(dateEnteredByUser);
      return dateEnteredByUser;
    };
  };

  app.prototype.postUserInputToServer = function(url, dateEnteredByUser) {
      var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.setRequestHeader('Content-type','application/json');

      req.addEventListener('readystatechange', function() {
      if (req.status == 200) {
        app.successHandler(req.responseText);
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
    ? showInput(differenceInput, response)
    : hideInput(differenceInput);
  };

  var getTextFromElement = function(elementName) {
    return document.getElementById(elementName).value;
  };

  var setTextInElement = function(elementName, text) {
    document.getElementById(elementName).value = text;
  };

  var showInput = function(differenceInput, dateOuput) {
    setTextInElement('difference', dateOuput);
    differenceInput.classList.add('cursor-text');
    differenceInput.classList.remove("invisible");
  };

  var hideInput = function(differenceInput) {
    differenceInput.classList.remove('cursor-text');
    differenceInput.classList.add("invisible");
  };
  return app;
})();

// module.exports = App;
