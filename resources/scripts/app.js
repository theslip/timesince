var app = app || {};

app.main = function main() {
  var differenceInput = document.getElementById('difference');
  var dateDifference = app.getDifferenceBetweenDates();
  var dateOuput = '';

  _.each(dateDifference, function(value, key) {
    dateOuput += value.time + ' ' + value.name;
    if ((dateDifference.length)-1 !== key) {
      dateOuput += ', ';
    }
  });
  !_.isEmpty(dateOuput)
  ? app.showDifferenceInput(differenceInput, dateOuput)
  : app.hideDifferenceInput(differenceInput);
};

app.getDateFromInput = function getDateFromInput() {
  var dateEnteredByUser = app.getTextFromElement('date');
  dateEnteredByUser = new Date(dateEnteredByUser);
  dateEnteredByUser = moment(dateEnteredByUser);

  return dateEnteredByUser;
};

app.getDifferenceBetweenDates = function getDifferenceBetweenDates() {
  var userDate = app.getDateFromInput();
  var currentTime = moment();
  var difference = [];
  var unitOfTime = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes'
  ];

  _.each(unitOfTime, function(unit, index) {
    var dateDifference = new app.dateDifference(unit, currentTime, userDate);
    if (_.isUndefined(dateDifference.time)) {
      return;
    }
    difference.push(dateDifference);
  });
  return difference;
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
