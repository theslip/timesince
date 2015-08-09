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

app.dateDifference = function dateDifference(name, date1, date2) {
  this.name = name;
  this.date1 = date1;
  this.date2 = date2;
  this.time = this.addDifference(this.date1, this.date2, name);
};

app.dateDifference.prototype.addDifference = function addDifference(date1, date2, unitOfTime) {
  var difference = date1.diff(date2, unitOfTime);
  date2.add(moment.duration(difference, unitOfTime));

  return difference;
};

app.dateDifference.prototype.getName = function getName() {
  return this.name;
}

app.dateDifference.prototype.getTime = function getName() {
  return this.time;
}

app.getDifferenceBetweenDates = function getDifferenceBetweenDates() {
  var userDate = app.getDateFromInput();
  var currentTime = moment();
  var difference = [];
  var unitOfTime = [
    'years',
    'months',
    'days',
    'hours',
    'minutes',
    'seconds'
  ];

  _.each(unitOfTime, function(unit, index) {
    var dateDifference = new app.dateDifference(unit, currentTime, userDate);
    difference.push(dateDifference);
  });

  console.log(difference);
  return difference;
};

app.setTextInElement = function setTextInElement(elementName, text) {
  document.getElementById(elementName).innerHTML = text;
};
