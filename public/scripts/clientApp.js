var app = app || {};

app.main = function main() {
  var dateEnteredByUser = {
    date: app.getDateFromInput()
  }
  var resource = app.postUserInputToServer();
  resource('/difference', app.successHandler, dateEnteredByUser);
};

app.postUserInputToServer = function postUserInputToServer() {
  function getURL(url, callback, dateEnteredByUser) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader('Content-type','application/json');
    req.addEventListener('readystatechange', function() {
      if (req.status == 200) {
        callback(req.responseText);
      }
      else {
        callback(null, new Error("Request failed: " + req.statusText));
      }
    });
    req.addEventListener("error", function() {
      callback(null, new Error("Network error"));
    });
    dateEnteredByUser = JSON.stringify(dateEnteredByUser);
    req.send(dateEnteredByUser);
  };
  return getURL;
};

app.successHandler = function successHandler(response) {
  console.log('inside');
  var differenceInput = document.getElementById('difference');
  console.log(response);
  (response && response != '')
  ? app.showDifferenceInput(differenceInput, response)
  : app.hideDifferenceInput(differenceInput);
}

app.getDateFromInput = function getDateFromInput() {
  var dateEnteredByUser = app.getTextFromElement('date');
  dateEnteredByUser = new Date(dateEnteredByUser);

  return dateEnteredByUser;
};

app.getTextFromElement = function getTextFromElement(name) {
  return document.getElementById(name).value;
};

app.setTextInElement = function setTextInElement(elementName, text) {
  document.getElementById(elementName).value = text;
};

app.showDifferenceInput = function showDifferenceInput(differenceInput, dateOuput) {
  app.setTextInElement('difference', dateOuput);
  differenceInput.classList.add('cursor-text');
  differenceInput.classList.remove("invisible");
};

app.hideDifferenceInput= function hideDifferenceInput(differenceInput) {
  differenceInput.classList.remove('cursor-text');
  differenceInput.classList.add("invisible");
};
