var scope = scope || {};
var jsdom = require('jsdom');
var window = jsdom.jsdom().createWindow();
var $ = require('jquery')(window);

scope.main = function main() {
  var dateEnteredByUser = {
    date: scope.getDateFromInput()
  }
  scope.postUserInputToServer(dateEnteredByUser);
};

scope.postUserInputToServer = function postUserInputToServer(dateEnteredByUser) {
  console.log('FUCK');
  $.ajax({
      url: "/difference",
      type: "POST",
      data: JSON.stringify(dateEnteredByUser),
      contentType: "application/json",
      success: function(response) {
        scope.successHandler(response);
        console.log(response);
   }
  });
};

scope.successHandler = function successHandler(response) {
  var differenceInput = document.getElementById('difference');
  (response && response != '')
  ? scope.showDifferenceInput(differenceInput, response)
  : scope.hideDifferenceInput(differenceInput);
}

scope.getDateFromInput = function getDateFromInput() {
  var dateEnteredByUser = scope.getTextFromElement('date');
  dateEnteredByUser = new Date(dateEnteredByUser);

  return dateEnteredByUser;
};

scope.getTextFromElement = function getTextFromElement(name) {
  return document.getElementById(name).value;
};

scope.setTextInElement = function setTextInElement(elementName, text) {
  document.getElementById(elementName).value = text;
};

scope.showDifferenceInput = function showDifferenceInput(differenceInput, dateOuput) {
  scope.setTextInElement('difference', dateOuput);
  differenceInput.classList.add('cursor-text');
  differenceInput.classList.remove("invisible");
};

scope.hideDifferenceInput= function hideDifferenceInput(differenceInput) {
  differenceInput.classList.remove('cursor-text');
  differenceInput.classList.add("invisible");
};

module.exports = scope;
