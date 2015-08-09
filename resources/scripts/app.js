var app = app || {};

app.getDateFromInput = function getDateFromInput() {
  var dateEnteredByUser = document.getElementById("date").value;
  dateEnteredByUser = new Date(dateEnteredByUser);
  dateEnteredByUser = moment(dateEnteredByUser);
  console.log(dateEnteredByUser);

  return dateEnteredByUser;
};


app.addDifference = function addDifference(date1, date2, unitOfTime) {
  var difference = date1.diff(date2, unitOfTime);
  date2.add(moment.duration(difference, unitOfTime));

  return difference;
};

app.getDifferenceBetweenDates = function getDifferenceBetweenDates() {
  var userDate = app.getDateFromInput();
  var currentTime = moment();

  var differenceBetweenDatesInYears = app.addDifference(currentTime, userDate, 'years');
  var differenceBetweenDatesInMonths = app.addDifference(currentTime, userDate, 'months');
  var differenceBetweenDatesInDays = app.addDifference(currentTime, userDate, 'days');
  var differenceBetweenDatesInHours = app.addDifference(currentTime, userDate, 'hours');
  var differenceBetweenDatesInMinutes = app.addDifference(currentTime, userDate, 'minutes');

  var difference = {
    years: differenceBetweenDatesInYears,
    months: differenceBetweenDatesInMonths,
    days: differenceBetweenDatesInDays,
    hours: differenceBetweenDatesInHours,
    minutes: differenceBetweenDatesInMinutes
  };

  return difference;
};

app.setTextInElement = function setTextInElement(elementName, text) {
  document.getElementById(elementName).innerHTML = text;
};

app.main = function main() {
  var dateDifference = app.getDifferenceBetweenDates();
  var concatString = '';
  var index = 0;

  _.each(dateDifference, function(value, key) {
    index++;

    concatString += value + ' ' + key;
    if (index !== _.size(dateDifference)) {
      concatString += ', ';
    }
  });
  app.setTextInElement('difference', concatString);
};
