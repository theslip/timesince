var app = app || {};

app.main = function main() {
  var dateEnteredByUser = {
    date: app.getDateFromInput()
  }
  app.postUserInputToServer(dateEnteredByUser);
};

app.postUserInputToServer = function postUserInputToServer(dateEnteredByUser) {
  $.ajax({
      url: "/difference",
      type: "POST",
      data: JSON.stringify(dateEnteredByUser),
      contentType: "application/json; charset=UTF-8",
      success: function(response) {
        app.successHandler(response);
        console.log(response);
   }
  });
};

app.successHandler = function successHandler(response) {
  var differenceInput = document.getElementById('difference');
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
