var app = app || {};

app.main = function main() {
  var dateDifference = app.getDifferenceBetweenDates();
  var concatString = '';

  _.each(dateDifference, function(value, key) {
    concatString += value.time + ' ' + value.name;
    if ((dateDifference.length)-1 !== key) {
      console.log(_.size(dateDifference));
      concatString += ', ';
    }
  });
  app.setTextInElement('difference', concatString);
};

app.getDateFromInput = function getDateFromInput() {
  var dateEnteredByUser = document.getElementById("date").value;
  dateEnteredByUser = new Date(dateEnteredByUser);
  dateEnteredByUser = moment(dateEnteredByUser);
  console.log(dateEnteredByUser);

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
    'minutes',
    'seconds'
  ];

  _.each(unitOfTime, function(unit, index) {
    var dateDifference = new app.dateDifference(unit, currentTime, userDate);
    difference.push(dateDifference);
  });

  return difference;
};

app.setTextInElement = function setTextInElement(elementName, text) {
  document.getElementById(elementName).innerHTML = text;
};
